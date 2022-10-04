-- Deploy olleks:07_Domain_mobile_number to pg

BEGIN;

-- CREATE DOMAIN phone_number AS text
--     CHECK(
--         VALUE ~ '^[0][5-6-7]\d{8}'
--         );

-- ALTER TABLE "employee" ALTER COLUMN "mobile_number" TYPE phone_number;

COMMIT;
