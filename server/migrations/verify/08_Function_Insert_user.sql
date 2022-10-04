-- Verify olleks:08_Function_Insert_user on pg

BEGIN;

SELECT * FROM insert_user(
	'{
		"firstname": "test",
		"lastname": "test",
		"email": "test",
		"password": "test",
		"phone_number": "test",
		"mobile_number": "test",
		"address": "test",
		"zip_code": 31100,
		"date_of_birth": "1990-03-07 00:00:00+00",
		"social_security_number": "187029835008784",
		"starting_date": "2022-03-07 00:00:00+00",
		"fonction": "test",
		"avatar": "test",
		"role_application": "test",
		"employee_qualification_id": 1
	}');

ROLLBACK;
