-- Revert olleks:11_Function_Update_Company from pg

BEGIN;

DROP FUNCTION "update_company";

COMMIT;
