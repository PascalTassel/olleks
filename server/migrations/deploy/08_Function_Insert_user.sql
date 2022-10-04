-- Deploy olleks:08_Function_Insert_user to pg

BEGIN;

CREATE OR REPLACE FUNCTION insert_user (u json) RETURNS employee AS $$
	
    INSERT INTO employee
        (
            "firstname",
            "lastname",
            "email",
            "password",
            "phone_number",
            "mobile_number",
            "address",
            "zip_code",
            "date_of_birth",
            "social_security_number",
            "starting_date",
            "fonction",
            "avatar",
            "role_application",
            "employee_qualification_id"
        )
        VALUES (
            (u->> 'firstname')::text,
            (u->> 'lastname')::text,
            (u->> 'email')::text,
            (u->> 'password')::text,
            (u->> 'phone_number')::text,
            (u->> 'mobile_number')::text,
            (u->> 'address')::text,
            (u->> 'zip_code')::int,
            (u->> 'date_of_birth')::timestamptz,
            (u->> 'social_security_number')::text,
            (u->> 'starting_date')::timestamptz,
            (u->> 'fonction')::text,
            (u->> 'avatar')::text,
            (u->> 'role_application')::text,
            (u->> 'employee_qualification_id')::int
        ) RETURNING *;

$$ LANGUAGE sql;

COMMIT;
