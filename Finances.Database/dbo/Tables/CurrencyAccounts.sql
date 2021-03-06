CREATE TABLE [dbo].[CurrencyAccounts](
    [Id] [int] IDENTITY(1,1) NOT NULL,
    [AccountId] [int] NOT NULL,
    [CurrencyId] [int] NOT NULL,
 CONSTRAINT [PK_CurrencyAccounts] PRIMARY KEY CLUSTERED 
(
    [Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CurrencyAccounts]  ADD  CONSTRAINT [FK_CurrencyAccounts_Accounts] FOREIGN KEY([AccountId])
REFERENCES [dbo].[Accounts] ([Id])
GO
ALTER TABLE [dbo].[CurrencyAccounts] CHECK CONSTRAINT [FK_CurrencyAccounts_Accounts]
GO
ALTER TABLE [dbo].[CurrencyAccounts]  ADD  CONSTRAINT [FK_CurrencyAccounts_Currencies] FOREIGN KEY([CurrencyId])
REFERENCES [dbo].[Currencies] ([Id])
GO
ALTER TABLE [dbo].[CurrencyAccounts] CHECK CONSTRAINT [FK_CurrencyAccounts_Currencies]
GO
