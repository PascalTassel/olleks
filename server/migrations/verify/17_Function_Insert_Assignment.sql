-- Verify olleks:17_Function_Insert_Assignment on pg

BEGIN;

SELECT insert_assignment(
	'{
		"starting_date": "2022-03-17 00:00:00+00",
		"ending_date": "2022-03-22 00:00:00+00",
		"color": "#F0F",
		"position": 0,
		"visibility": true,
		"employee_id": 1,
		"absence_id": null,
		"site_id": 8					
	}'

);

ROLLBACK;
