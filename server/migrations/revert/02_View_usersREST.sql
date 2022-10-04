-- Revert olleks:02_View_usersREST from pg

BEGIN;

DROP VIEW get_user_rest CASCADE;

COMMIT;
