-- Revert olleks:18_View_Site_Company_name from pg

BEGIN;

DROP VIEW get_site_with_company_name CASCADE;

COMMIT;
