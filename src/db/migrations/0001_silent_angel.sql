ALTER TABLE "publicacion" DROP CONSTRAINT "publicacion_id_agencia_fkey";
--> statement-breakpoint
ALTER TABLE "publicacion" ADD CONSTRAINT "publicacion_id_agencia_agencia_id_fk" FOREIGN KEY ("id_agencia") REFERENCES "public"."agencia"("id") ON DELETE cascade ON UPDATE cascade;