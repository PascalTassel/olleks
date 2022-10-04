-- Verify olleks:10_Function_Insert_Comapny on pg

BEGIN;

SELECT * FROM insert_company(
	'{
		"name": "Nike",
		"address": "2 boulevard de la virgule",
		"zip_code": "89000",
		"type": "Client"
	}');

ROLLBACK;
