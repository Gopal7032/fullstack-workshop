DELIMITER $$

CREATE FUNCTION GetTenureCategory(hire_date DATE)
RETURNS VARCHAR(20)
DETERMINISTIC
BEGIN
    DECLARE years INT;
    SET years = TIMESTAMPDIFF(YEAR, hire_date, CURDATE());

    IF years > 5 THEN
        RETURN 'Veteran';
    ELSEIF years BETWEEN 2 AND 5 THEN
        RETURN 'Experienced';
    ELSE
        RETURN 'New Hire';
    END IF;
END$$

DELIMITER ;

SELECT
    name,
    hire_date,
    GetTenureCategory(hire_date) AS tenure_category
FROM employees;