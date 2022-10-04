-- Deploy olleks:17_Function_Insert_Assignment to pg

BEGIN;

CREATE OR REPLACE FUNCTION insert_assignment (a json) RETURNS assignment AS $$
	
	INSERT INTO "assignment"
		(
			"starting_date",
			"ending_date",
			"color",
			"position",
			"visibility",
			"employee_id",
			"absence_id",
			"site_id"
		)
		VALUES (
			(a->> 'starting_date')::timestamptz,
			(a->> 'ending_date')::timestamptz,
			(a->> 'color')::text,
			(a->> 'position')::int,
			(a->> 'visibility')::boolean,
			(a->> 'employee_id')::int,
			(a->> 'absence_id')::int,
			(a->> 'site_id')::int
		) RETURNING *;

$$ LANGUAGE sql;

COMMIT;
