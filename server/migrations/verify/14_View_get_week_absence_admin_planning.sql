-- Verify olleks:14_View_get_week_absence_admin_planning on pg

BEGIN;

SELECT * FROM get_week_absence_admin_planning;

ROLLBACK;
