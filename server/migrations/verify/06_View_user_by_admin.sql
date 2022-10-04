-- Verify olleks:06_View_user_by_admin on pg

BEGIN;

SELECT * FROM get_user_by_admin WHERE id = 1;

ROLLBACK;
