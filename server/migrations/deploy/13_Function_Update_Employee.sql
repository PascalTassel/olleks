-- Deploy olleks:13_Function_Update_Employee to pg

BEGIN;

CREATE OR REPLACE FUNCTION update_employee_by_admin(json) RETURNS employee AS $$

	UPDATE "employee"
	SET social_security_number = ($1 ->> 'social_security_number')::text,
		firstname = ($1 ->> 'firstname')::text,
		lastname = ($1 ->> 'lastname')::text,
		date_of_birth = ($1 ->> 'date_of_birth')::timestamptz,
		address = ($1 ->> 'address')::text,
		zip_code = ($1 ->> 'zip_code')::int,
		email = ($1 ->> 'email')::text,
		mobile_number = ($1 ->> 'mobile_number')::text,
		phone_number = ($1 ->> 'phone_number')::text,
		starting_date = ($1 ->> 'starting_date')::timestamptz,
		avatar = ($1 ->> 'avatar')::text,
		fonction = ($1 ->> 'fonction')::text,
		role_application = ($1 ->> 'role_application')::text,
		updated_at = now()
	WHERE id = ($1->>'id')::int
	RETURNING *;
	
$$ LANGUAGE sql;

COMMIT;
