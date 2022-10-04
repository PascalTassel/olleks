-- Verify olleks:01_init_db on pg

BEGIN;

SELECT * FROM "employee";
SELECT * FROM "company";
SELECT * FROM "site";
SELECT * FROM "assignment";
SELECT * FROM "absence";
SELECT * FROM "employee_qualification";
SELECT * FROM "employee_contract";
SELECT * FROM "contact";

ROLLBACK;
