-- Deploy olleks:14_View_get_week_absence_admin_planning to pg

BEGIN;

CREATE VIEW get_week_absence_admin_planning AS

SELECT 
	"absence"."id" AS id,
	"absence"."reason" AS reason,
	"assignment"."starting_date",
	"assignment"."ending_date",
	json_build_object(
			'id', "assignment"."id",
			'starting_date', "assignment"."starting_date",
			'ending_date', "assignment"."ending_date",
			'color', "assignment"."color",
			'position', "assignment"."position",
			'visibility', "assignment"."visibility",
			'employee', json_build_object(
				'id', "employee"."id",
				'firstname', "employee"."firstname",
				'lastname', "employee"."lastname",
				'mobile_number', "employee"."mobile_number",
				'phone_number', "employee"."phone_number",
				'avatar', "employee"."avatar",
				'fonction', "employee"."fonction"
			)
		) AS assignment
FROM "absence"
LEFT JOIN "assignment" ON "absence"."id" = "assignment"."absence_id"
LEFT JOIN "employee" ON "employee"."id" = "assignment"."employee_id"
WHERE "assignment"."starting_date" IS NOT NULL
GROUP BY "absence"."id", "assignment"."absence_id", "assignment"."id","employee"."id", "assignment"."starting_date",
"assignment"."ending_date";

COMMIT;
