-- Revert olleks:06_View_user_by_admin from pg

BEGIN;

DROP VIEW get_user_by_admin CASCADE;

COMMIT;
