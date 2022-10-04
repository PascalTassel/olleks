-- Deploy olleks:18_View_Site_Company_name to pg

BEGIN;

CREATE VIEW get_site_with_company_name AS

	SELECT 
		"site"."id", 
		"site"."name", 
		"site"."address", 
		"site"."zip_code", 
		"site"."manager_name", 
		"site"."estimated_duration", json_build_object(
			'company_id', "company"."id",
			'company_name', "company"."name"
		) AS company
	FROM "site"
	LEFT JOIN "company" ON "company"."id" = "site"."company_id";

COMMIT;
