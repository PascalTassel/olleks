-- Revert olleks:17_Function_Insert_Assignment from pg

BEGIN;

DROP FUNCTION insert_assignment;

COMMIT;
