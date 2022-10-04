-- Revert olleks:12_Function_Update_Site from pg

BEGIN;

DROP FUNCTION update_site;

COMMIT;
