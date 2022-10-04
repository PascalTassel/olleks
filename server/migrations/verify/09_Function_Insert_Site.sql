-- Verify olleks:09_Function_Insert_Site on pg

BEGIN;

SELECT * FROM insert_site(
	'{
		"name": "test1",
		"address": "test1",
		"zip_code": "75005",
		"manager_name": "Hicham chrita",
		"company_id": "1"
	}');

ROLLBACK;
