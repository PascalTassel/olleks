-- Deploy olleks:16_Function_Updtae_Assignment to pg

BEGIN;

CREATE OR REPLACE FUNCTION update_assignment(json) RETURNS assignment AS $$

	UPDATE "assignment"
	SET starting_date = ($1 ->> 'starting_date')::timestamptz,
		ending_date = ($1 ->> 'ending_date')::timestamptz,
		color = ($1 ->> 'color')::text,
		position = ($1 ->> 'position')::int,
		visibility = ($1 ->> 'visibility')::boolean,
		employee_id = ($1 ->> 'employee_id')::int,
		absence_id = ($1 ->> 'absence_id')::int,
		site_id = ($1 ->> 'site_id')::int,
		updated_at = now()
	WHERE id = ($1->>'id')::int
	RETURNING *;
	
$$ LANGUAGE sql;

COMMIT;
