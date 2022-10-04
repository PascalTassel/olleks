-- Revert olleks:03_View_admin_planning from pg

BEGIN;

DROP VIEW get_Week_admin_planning CASCADE;

COMMIT;
