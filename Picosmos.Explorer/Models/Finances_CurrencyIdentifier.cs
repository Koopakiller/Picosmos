//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Koopakiller.Apps.Picosmos.Explorer.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Finances_CurrencyIdentifier
    {
        public int Id { get; set; }
        public int CurrencyId { get; set; }
        public string Identifier { get; set; }
    
        public virtual Finances_Currencies Finances_Currencies { get; set; }
    }
}