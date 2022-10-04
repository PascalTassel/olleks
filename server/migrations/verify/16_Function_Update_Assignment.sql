-- Verify olleks:16_Function_Updtae_Assignment on pg

BEGIN;

SELECT update_assignment(
'
	{
		"id": "23",
		"starting_date": "2022-03-07 00:00:00+00",
		"ending_date": "2022-03-13 00:00:00+00",
		"color": "#F0F",
		"position":0,
		"employee_id": 7,
		"absence_id": null,
		"site_id": "11"
	}
	'
);

ROLLBACK;
