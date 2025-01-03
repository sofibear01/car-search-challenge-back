import { pgTable, unique, serial, varchar, foreignKey, uuid, integer, timestamp, numeric } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm";
import { rol } from "./schema";

export const usuario = pgTable("usuario", {
    id: serial().primaryKey().notNull(),
    idSupabase: uuid("id_supabase").notNull(),
    nombre: varchar({ length: 100 }).notNull(),
    email: varchar({ length: 100 }).notNull(),
    idRol: integer("id_rol").notNull(),
    fechaAlta: timestamp("fecha_alta", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
    foreignKey({
            columns: [table.idRol],
            foreignColumns: [rol.id],
            name: "usuario_id_rol_fkey"
        }).onDelete("restrict"),
    unique("usuario_id_supabase_key").on(table.idSupabase),
    unique("usuario_email_key").on(table.email),
]);