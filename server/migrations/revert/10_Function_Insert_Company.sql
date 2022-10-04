-- Revert olleks:10_Function_Insert_Comapny from pg

BEGIN;

DROP FUNCTION "insert_company";

COMMIT;
