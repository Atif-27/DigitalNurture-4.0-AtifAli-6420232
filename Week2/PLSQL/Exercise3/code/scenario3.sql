CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account IN INT,
    p_to_account IN INT,
    p_amount IN DECIMAL
) AS
    v_balance DECIMAL(10,2);
BEGIN
    -- Get balance of source account
    SELECT balance INTO v_balance
    FROM accounts
    WHERE account_id = p_from_account;

    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance');
    END IF;

    -- Deduct from source
    UPDATE accounts
    SET balance = balance - p_amount
    WHERE account_id = p_from_account;

    -- Add to destination
    UPDATE accounts
    SET balance = balance + p_amount
    WHERE account_id = p_to_account;
END;
/

EXEC TransferFunds(1, 3, 1000);
