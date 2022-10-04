-- Deploy olleks:01_init_db to pg

BEGIN;

CREATE TABLE "employee_qualification" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "absence" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "reason" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "employee" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "social_security_number" TEXT NOT NULL UNIQUE,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "date_of_birth" TIMESTAMPTZ NOT NULL,
    "address" TEXT NOT NULL,
    "zip_code" INT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "mobile_number" TEXT NOT NULL,
    "phone_number" TEXT,
    "password" TEXT NOT NULL,
    "starting_date" DATE NOT NULL DEFAULT now(),
    "avatar" TEXT,
    "fonction" TEXT NOT NULL,
    "role_application" TEXT NOT NULL,
    "employee_qualification_id" INT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "assignment" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "starting_date" TIMESTAMPTZ NOT NULL,
    "ending_date" TIMESTAMPTZ NOT NULL,
    "color" TEXT,
    "position" INT NOT NULL DEFAULT 0,
    "visibility" BOOLEAN DEFAULT false,
    "employee_id" INT NOT NULL,
    "absence_id" INT,
    "site_id" INT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "employee_contract" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type_of_contract" TEXT NOT NULL,
    "starting_date" TIMESTAMPTZ NOT NULL,
    "duration" INT,
    "company_id" INT,
    "employee_id" INT,    
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "site" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "zip_code" INT NOT NULL,
    "manager_name" TEXT,
    "estimated_duration" INT,
    "company_id" INT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "contact" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone_number" TEXT,
    "mobile_number" TEXT NOT NULL UNIQUE,
    "fonction" TEXT NOT NULL,
    "company_id" INT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "company" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "address" TEXT NOT NULL UNIQUE,
    "zip_code" INT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

ALTER TABLE "employee" ADD FOREIGN KEY ("employee_qualification_id") REFERENCES "employee_qualification" ("id") ON DELETE CASCADE;
ALTER TABLE "assignment" ADD FOREIGN KEY ("employee_id") REFERENCES "employee" ("id") ON DELETE CASCADE;
ALTER TABLE "assignment" ADD FOREIGN KEY ("site_id") REFERENCES "site" ("id") ON DELETE CASCADE;
ALTER TABLE "assignment" ADD FOREIGN KEY ("absence_id") REFERENCES "absence" ("id") ON DELETE CASCADE;
ALTER TABLE "employee_contract" ADD FOREIGN KEY ("company_id") REFERENCES "company" ("id") ON DELETE CASCADE;
ALTER TABLE "employee_contract" ADD FOREIGN KEY ("employee_id") REFERENCES "employee" ("id") ON DELETE CASCADE;
ALTER TABLE "site" ADD FOREIGN KEY ("company_id") REFERENCES "company" ("id") ON DELETE CASCADE;
ALTER TABLE "contact" ADD FOREIGN KEY ("company_id") REFERENCES "company" ("id") ON DELETE CASCADE;

CREATE DOMAIN posint AS int
    CHECK(VALUE > 0 OR VALUE = null);

CREATE DOMAIN check_age AS timestamptz
		CHECK (VALUE < now() - '17 years'::interval);
    
CREATE DOMAIN num_ss_fr AS text
    CHECK(
        VALUE ~ '^[1-2]\d{2}[0-1][1-9]\d{2}.{6,8}'
    );

ALTER TABLE "employee"
    ALTER COLUMN "employee_qualification_id" TYPE posint,
    ALTER COLUMN "date_of_birth" TYPE check_age,
    ALTER COLUMN "social_security_number" TYPE num_ss_fr;

ALTER TABLE "assignment"
    ALTER COLUMN "position" TYPE posint,
    ALTER COLUMN "employee_id" TYPE posint,
    ALTER COLUMN "absence_id" TYPE posint,
    ALTER COLUMN "site_id" TYPE posint;

ALTER TABLE "employee_contract"
    ALTER COLUMN "duration" TYPE posint,
    ALTER COLUMN "company_id" TYPE posint,
    ALTER COLUMN "employee_id" TYPE posint;

ALTER TABLE "site"
    ALTER COLUMN "estimated_duration" TYPE posint,
    ALTER COLUMN "company_id" TYPE posint;

ALTER TABLE "contact"
    ALTER COLUMN "company_id" TYPE posint;

COMMIT;
