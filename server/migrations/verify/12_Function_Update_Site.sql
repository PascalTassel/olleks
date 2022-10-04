-- Verify olleks:12_Function_Update_Site on pg

BEGIN;

SELECT update_site(
'
	{
	"id":16,
	"name": "Addecco",
	"address": "15 Rue travail temporaire",
	"zip_code": "34000",
	"manager_name": "Jordane DEVEMY",
	"company_id": 5
	}
	'
);

ROLLBACK;
