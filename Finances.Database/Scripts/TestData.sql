USE [Finances.Database]
GO
SET IDENTITY_INSERT [dbo].[Persons] ON 
GO
INSERT [dbo].[Persons] ([Id], [Name]) VALUES (1, N'Test User')
GO
SET IDENTITY_INSERT [dbo].[Persons] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 
GO
INSERT [dbo].[Users] ([Id], [PersonId], [Email], [Phone]) VALUES (1, 1, N'test@localhost.de', NULL)
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
SET IDENTITY_INSERT [dbo].[Accounts] ON 
GO
INSERT [dbo].[Accounts] ([Id], [UserId], [Name]) VALUES (1, 1, N'Cash      ')
GO
SET IDENTITY_INSERT [dbo].[Accounts] OFF
GO
SET IDENTITY_INSERT [dbo].[Currencies] ON 
GO
INSERT [dbo].[Currencies] ([Id]) VALUES (1)
GO
SET IDENTITY_INSERT [dbo].[Currencies] OFF
GO
SET IDENTITY_INSERT [dbo].[CurrencyAccounts] ON 
GO
INSERT [dbo].[CurrencyAccounts] ([Id], [AccountId], [CurrencyId]) VALUES (1, 1, 1)
GO
SET IDENTITY_INSERT [dbo].[CurrencyAccounts] OFF
GO
SET IDENTITY_INSERT [dbo].[CurrencySymbols] ON 
GO
INSERT [dbo].[CurrencySymbols] ([Id], [Symbol], [CurrencyId]) VALUES (1, N'€', 1)
GO
INSERT [dbo].[CurrencySymbols] ([Id], [Symbol], [CurrencyId]) VALUES (2, N'EUR', 1)
GO
INSERT [dbo].[CurrencySymbols] ([Id], [Symbol], [CurrencyId]) VALUES (3, N'Euro', 1)
GO
SET IDENTITY_INSERT [dbo].[CurrencySymbols] OFF
GO
SET IDENTITY_INSERT [dbo].[Transactions] ON 
GO
INSERT [dbo].[Transactions] ([Id], [PersonId], [Value], [Timestamp], [CurrencyAccountId]) VALUES (2, 1, CAST(20.00 AS Decimal(18, 2)), CAST(N'2015-05-05T00:00:00.000' AS DateTime), 1)
GO
INSERT [dbo].[Transactions] ([Id], [PersonId], [Value], [Timestamp], [CurrencyAccountId]) VALUES (4, 1, CAST(-10.00 AS Decimal(18, 2)), CAST(N'2015-06-06T00:00:00.000' AS DateTime), 1)
GO
INSERT [dbo].[Transactions] ([Id], [PersonId], [Value], [Timestamp], [CurrencyAccountId]) VALUES (5, 1, CAST(15.00 AS Decimal(18, 2)), CAST(N'2016-02-02T00:00:00.000' AS DateTime), 1)
GO
INSERT [dbo].[Transactions] ([Id], [PersonId], [Value], [Timestamp], [CurrencyAccountId]) VALUES (6, 1, CAST(-30.00 AS Decimal(18, 2)), CAST(N'2016-07-07T00:00:00.000' AS DateTime), 1)
GO
INSERT [dbo].[Transactions] ([Id], [PersonId], [Value], [Timestamp], [CurrencyAccountId]) VALUES (7, 1, CAST(-20.00 AS Decimal(18, 2)), CAST(N'2017-01-01T10:00:00.000' AS DateTime), 1)
GO
INSERT [dbo].[Transactions] ([Id], [PersonId], [Value], [Timestamp], [CurrencyAccountId]) VALUES (8, 1, CAST(20.00 AS Decimal(18, 2)), CAST(N'2017-01-01T14:00:00.000' AS DateTime), 1)
GO
INSERT [dbo].[Transactions] ([Id], [PersonId], [Value], [Timestamp], [CurrencyAccountId]) VALUES (9, 1, CAST(30.00 AS Decimal(18, 2)), CAST(N'2017-02-02T00:00:00.000' AS DateTime), 1)
GO
SET IDENTITY_INSERT [dbo].[Transactions] OFF
GO
SET IDENTITY_INSERT [dbo].[FixedValues] ON 
GO
INSERT [dbo].[FixedValues] ([Id], [Value], [Timestamp], [CurrencyAccountId]) VALUES (1, CAST(100.00 AS Decimal(18, 2)), CAST(N'2016-01-01T00:00:00.000' AS DateTime), 1)
GO
INSERT [dbo].[FixedValues] ([Id], [Value], [Timestamp], [CurrencyAccountId]) VALUES (2, CAST(200.00 AS Decimal(18, 2)), CAST(N'2017-01-01T12:00:00.000' AS DateTime), 1)
GO
SET IDENTITY_INSERT [dbo].[FixedValues] OFF
GO
