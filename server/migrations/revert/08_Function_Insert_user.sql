-- Revert olleks:08_Function_Insert_user from pg

BEGIN;

DROP FUNCTION "insert_user";

COMMIT;
