CREATE SCHEMA "awes-dev";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "awes-dev"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
