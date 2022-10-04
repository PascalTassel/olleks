-- Verify olleks:03_View_admin_planning on pg

BEGIN;

SELECT * FROM get_week_admin_planning;

ROLLBACK;
