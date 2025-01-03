import { sql } from "drizzle-orm";
import { pgTable, unique, serial, varchar, foreignKey, uuid, integer, timestamp, numeric } from "drizzle-orm/pg-core"
import { usuario } from "./schema";


export const agencia = pgTable("agencia", {
    id: serial().primaryKey().notNull(),
    nombre: varchar({ length: 100 }).notNull(),
    direccion: varchar({ length: 255 }).notNull(),
    latitud: numeric({ precision: 9, scale:  6 }).notNull(),
    longitud: numeric({ precision: 9, scale:  6 }).notNull(),
    idUsuario: integer("id_usuario"),
    fechaAlta: timestamp("fecha_alta", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
    foreignKey({
            columns: [table.idUsuario],
            foreignColumns: [usuario.id],
            name: "agencia_id_usuario_fkey"
        }).onDelete("set null"),
    unique("agencia_id_usuario_key").on(table.idUsuario),
]);