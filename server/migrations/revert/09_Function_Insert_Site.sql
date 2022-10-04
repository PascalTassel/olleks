-- Revert olleks:09_Function_Insert_Site from pg

BEGIN;

DROP FUNCTION "insert_site";

COMMIT;
