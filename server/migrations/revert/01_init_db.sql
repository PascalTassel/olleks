-- Revert olleks:01_init_db from pg

BEGIN;


DROP TABLE
"company", 
"contact", 
"site", 
"employee_contract", 
"assignment", 
"employee", 
"absence",
"employee_qualification" CASCADE; 

DROP DOMAIN num_ss_fr;
DROP DOMAIN posint;
DROP DOMAIN check_age;

COMMIT;
