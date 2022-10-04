-- Verify olleks:18_View_Site_Company_name on pg

BEGIN;

SELECT * FROM get_site_with_company_name;

ROLLBACK;
