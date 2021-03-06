CREATE TABLE [dbo].[Transactions](
    [Id] [int] IDENTITY(1,1) NOT NULL,
    [PersonId] [int] NOT NULL,
    [Value] [decimal](18, 2) NOT NULL,
    [TimeStampDate] DATE NOT NULL,
    [TimeStampTime] TIME NULL,
    [CurrencyAccountId] [int] NOT NULL,
    [Note] NVARCHAR(MAX) NOT NULL,
    [RawDataId] INT NULL, 
    [IsDebt] BIT NOT NULL DEFAULT 0, 
    PRIMARY KEY CLUSTERED 
(
    [Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Transactions]  ADD  CONSTRAINT [FK_Transactions_CurrencyAccounts] FOREIGN KEY([CurrencyAccountId])
REFERENCES [dbo].[CurrencyAccounts] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_Transactions_CurrencyAccounts]
GO
ALTER TABLE [dbo].[Transactions]  ADD  CONSTRAINT [FK_Transactions_Persons] FOREIGN KEY([PersonId])
REFERENCES [dbo].[Persons] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_Transactions_Persons]
GO
ALTER TABLE [dbo].[Transactions]  ADD  CONSTRAINT [FK_RawData_Transactions] FOREIGN KEY([RawDataId])
REFERENCES [dbo].[RawData] ([Id])
GO
ALTER TABLE [dbo].[Transactions] CHECK CONSTRAINT [FK_RawData_Transactions]
GO