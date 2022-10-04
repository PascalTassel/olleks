-- Deploy olleks:12_Function_Update_Site to pg

BEGIN;

CREATE OR REPLACE FUNCTION update_site(json) RETURNS site AS $$

	UPDATE "site"
	SET name = ($1 ->> 'name')::text,
		address = ($1 ->> 'address')::text,
		zip_Code = ($1 ->> 'zip_code')::int,
		manager_name = ($1 ->> 'manager_name')::text,
		estimated_duration = ($1 ->> 'estimated_duration')::int,
		company_id = ($1 ->> 'company_id')::int,
		updated_at = now()
	WHERE id = ($1->>'id')::int
	RETURNING *;

$$ LANGUAGE sql;

COMMIT;
