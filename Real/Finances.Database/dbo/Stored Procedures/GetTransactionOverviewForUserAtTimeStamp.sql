﻿CREATE PROCEDURE [dbo].[GetTransactionOverviewForUserAtTimeStamp]
	@userId INT,
	@timeStamp DATE
AS
BEGIN
	SELECT a.Name AS [AccountName]
		 , ca.CurrencyId AS [CurrencyId]
		 , [dbo].[GetValueForDate](@timeStamp, ca.Id)
	FROM CurrencyAccounts ca
	INNER JOIN Accounts a ON a.Id = ca.AccountId
	WHERE a.UserId = @userId
END