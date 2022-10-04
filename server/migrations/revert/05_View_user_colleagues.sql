-- Revert olleks:05_View_user_colleagues from pg

BEGIN;

DROP VIEW get_user_colleagues CASCADE;

COMMIT;
