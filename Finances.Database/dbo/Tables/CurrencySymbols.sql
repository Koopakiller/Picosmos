CREATE TABLE [dbo].[CurrencySymbols](
    [Id] [int] IDENTITY(1,1) NOT NULL,
    [Symbol] [nvarchar](max) NOT NULL,
    [CurrencyId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
    [Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CurrencySymbols]  ADD  CONSTRAINT [FK_CurrencySymbols_Currencies] FOREIGN KEY([CurrencyId])
REFERENCES [dbo].[Currencies] ([Id])
GO
ALTER TABLE [dbo].[CurrencySymbols] CHECK CONSTRAINT [FK_CurrencySymbols_Currencies]
GO
