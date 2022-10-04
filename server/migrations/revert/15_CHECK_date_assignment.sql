-- Revert olleks:15_CHECK_date_assignment from pg

BEGIN;

ALTER TABLE "assignment"
    DROP CONSTRAINT assignment_check;

COMMIT;
