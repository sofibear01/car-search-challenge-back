-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "rol" (
	"id" serial PRIMARY KEY NOT NULL,
	"nombre" varchar(50) NOT NULL,
	CONSTRAINT "rol_nombre_key" UNIQUE("nombre")
);
--> statement-breakpoint
CREATE TABLE "usuario" (
	"id" serial PRIMARY KEY NOT NULL,
	"id_supabase" uuid NOT NULL,
	"nombre" varchar(100) NOT NULL,
	"email" varchar(100) NOT NULL,
	"id_rol" integer NOT NULL,
	"fecha_alta" timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "usuario_id_supabase_key" UNIQUE("id_supabase"),
	CONSTRAINT "usuario_email_key" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "agencia" (
	"id" serial PRIMARY KEY NOT NULL,
	"nombre" varchar(100) NOT NULL,
	"direccion" varchar(255) NOT NULL,
	"latitud" numeric(9, 6) NOT NULL,
	"longitud" numeric(9, 6) NOT NULL,
	"id_usuario" integer,
	"fecha_alta" timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "agencia_id_usuario_key" UNIQUE("id_usuario")
);
--> statement-breakpoint
CREATE TABLE "publicacion" (
	"id" serial PRIMARY KEY NOT NULL,
	"id_agencia" integer NOT NULL,
	"nombre_titular" varchar(100) NOT NULL,
	"direccion" varchar(255) NOT NULL,
	"latitud" numeric(9, 6) NOT NULL,
	"longitud" numeric(9, 6) NOT NULL,
	"fecha_alta" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "public"."rol"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agencia" ADD CONSTRAINT "agencia_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "public"."usuario"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "publicacion" ADD CONSTRAINT "publicacion_id_agencia_fkey" FOREIGN KEY ("id_agencia") REFERENCES "public"."agencia"("id") ON DELETE cascade ON UPDATE no action;
*/