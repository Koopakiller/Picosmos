CREATE TABLE [dbo].[FixedValues](
    [Id] [int] IDENTITY(1,1) NOT NULL,
    [Value] [decimal](18, 2) NOT NULL,
    [TimeStampDate] DATE NOT NULL,
    [TimeStampTime] TIME NULL,
    [CurrencyAccountId] [int] NOT NULL,
    [Note] NVARCHAR(MAX) NOT NULL,
PRIMARY KEY CLUSTERED 
(
    [Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[FixedValues]  ADD  CONSTRAINT [FK_FixedValues_CurrencyAccounts] FOREIGN KEY([CurrencyAccountId])
REFERENCES [dbo].[CurrencyAccounts] ([Id])
GO
ALTER TABLE [dbo].[FixedValues] CHECK CONSTRAINT [FK_FixedValues_CurrencyAccounts]
GO
