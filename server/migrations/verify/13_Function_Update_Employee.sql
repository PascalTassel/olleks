-- Verify olleks:13_Function_Update_Employee on pg

BEGIN;

SELECT update_employee(
'
	{
		"id": 21,
		"social_security_number": "187029835008784",
		"firstname": "Chrita",
		"lastname": "Hicham",
		"date_of_birth": "1984-03-02 09:46:26.00+00",
		"address": "11 rue de test",
		"zip_code": 31000,
		"email": "hicham@oclock.com",
		"mobile_number": "0606060606",
		"phone_number": "0505050505",
		"starting_date": "2020-03-02 09:46:26.00+00",
		"avatar": "maphoto.jpg",
		"fonction": "Helper",
		"role_application": "user" 
	}
	'
);

ROLLBACK;
