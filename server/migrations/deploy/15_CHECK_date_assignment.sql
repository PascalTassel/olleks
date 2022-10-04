-- Deploy olleks:15_CHECK_date_assignment to pg

BEGIN;

ALTER TABLE "assignment"
    ADD CHECK ("starting_date" <= "ending_date");

COMMIT;
