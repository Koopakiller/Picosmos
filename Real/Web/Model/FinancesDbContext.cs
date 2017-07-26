﻿using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Koopakiller.Apps.Picosmos.Real.Model
{
    public class FinancesDbContext : DbContext
    {
        public FinancesDbContext(DbContextOptions<FinancesDbContext> options) : base(options) { }

        private DbSet<User> Users { get; set; }
        private DbSet<Person> Persons { get; set; }
        private DbSet<CurrencyAccount> CurrencyAccounts { get; set; }

        public IEnumerable<User> GetUsers()
        {
            return this.Users.FromSql("EXEC GetUsers");
        }

        public IEnumerable<Person> GetPersons()
        {
            return this.Persons.FromSql("EXEC GetPersons");
        }

        public IEnumerable<CurrencyAccount> GetCurrencyAccountForUser(int userId)
        {
            return this.CurrencyAccounts.FromSql("EXEC GetCurrencyAccountForUser {0}", userId);
        }
    }

    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class CurrencyAccount
    {
        public int AccountId { get; set; }
        public string AccountName { get; set; }
        public int CurrencyAccountId { get; set; }
        public string CurrencyName { get; set; }
    }
}
