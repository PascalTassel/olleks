
BEGIN;

CREATE VIEW get_user_colleagues AS

	SELECT 
		"employee"."id", 
		"employee"."firstname", 
		"employee"."lastname", 
		"employee"."phone_number", 
		"employee"."mobile_number"				,
		"site"."id" AS "site_id",
		"assignment"."starting_date",
		"assignment"."ending_date"
	FROM "employee"
	LEFT JOIN "assignment" ON "assignment"."employee_id" = "employee"."id"
	LEFT JOIN "site" ON "assignment"."site_id" = "site"."id"
	LEFT JOIN "company" ON "company"."id" = "site"."company_id";
COMMIT;
