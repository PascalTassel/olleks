-- Revert olleks:13_Function_Update_Employee from pg

BEGIN;

DROP FUNCTION update_employee_by_admin;

COMMIT;
