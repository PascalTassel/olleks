-- Deploy olleks:09_Function_Insert_Site to pg

BEGIN;

CREATE OR REPLACE FUNCTION insert_site (s json) RETURNS site AS $$
	
	INSERT INTO site
		(
			"name",
			"address",
			"zip_code",
			"manager_name",
			"company_id",
			"estimated_duration"
		)
		VALUES (
			(s->> 'name')::text,
			(s->> 'address')::text,
			(s->> 'zip_code')::int,
			(s->> 'manager_name')::text,
			(s->> 'company_id')::int,
			(s->> 'estimated_duration')::int
		) RETURNING *;

$$ LANGUAGE sql;

COMMIT;
