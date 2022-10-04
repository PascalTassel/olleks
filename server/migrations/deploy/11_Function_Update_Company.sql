-- Deploy olleks:11_Function_Update_Company to pg

BEGIN;

CREATE OR REPLACE FUNCTION update_company(json) RETURNS company AS $$

	UPDATE "company" SET 
		name = ($1 ->> 'name')::text,
		address = ($1 ->> 'address')::text,
		zip_Code = ($1 ->> 'zip_code')::int,
		type = ($1 ->> 'type')::text,
		updated_at = now()
	WHERE id = ($1->>'id')::int
	RETURNING *;
	
$$ LANGUAGE sql;

COMMIT;
