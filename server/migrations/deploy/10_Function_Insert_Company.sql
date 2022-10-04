-- Deploy olleks:10_Function_Insert_Comapny to pg

BEGIN;

CREATE OR REPLACE FUNCTION insert_company (c json) RETURNS company AS $$
	
	INSERT INTO "company"
		(
			"name",
			"address",
			"zip_code",
			"type"
		)
		VALUES (
			(c->> 'name')::text,
			(c->> 'address')::text,
			(c->> 'zip_code')::int,
			(c->> 'type')::text
		) RETURNING *;

$$ LANGUAGE sql;

COMMIT;
