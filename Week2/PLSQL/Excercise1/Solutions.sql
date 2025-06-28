-- Scenario 1:
DECLARE
    CURSOR cur_senior_loans IS
        SELECT l.LoanID, l.InterestRate
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE c.Age > 60;

BEGIN
    FOR loan_rec IN cur_senior_loans LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE LoanID = loan_rec.LoanID;
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('Discount applied to senior customers'' loans.');

    COMMIT;
END;
/


-- Scenario 2:
BEGIN
    FOR cust_rec IN (SELECT CustomerID FROM Customers WHERE Balance > 10000) LOOP
        UPDATE Customers
        SET IsVIP = 'Y'
        WHERE CustomerID = cust_rec.CustomerID;
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('VIP status updated for eligible customers.');

    COMMIT;
END;
/


-- Scenario 3:
DECLARE
    CURSOR due_loans IS
        SELECT l.LoanID, c.Name, l.DueDate
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR loan_rec IN due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan_rec.LoanID || 
                             ' for customer ' || loan_rec.Name || 
                             ' is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY'));
    END LOOP;
END;
/
