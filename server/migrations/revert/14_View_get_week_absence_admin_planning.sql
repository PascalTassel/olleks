-- Revert olleks:14_View_get_week_absence_admin_planning from pg

BEGIN;

DROP VIEW get_week_absence_admin_planning CASCADE;

COMMIT;
