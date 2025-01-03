
import { sql } from "drizzle-orm";
import { pgTable, serial, varchar, foreignKey, integer, timestamp, numeric } from "drizzle-orm/pg-core";
import { agencia } from "./agencia";

export const publicacion = pgTable("publicacion", {
  id: serial().primaryKey().notNull(),
  idAgencia: integer("id_agencia").notNull(),
  nombreTitular: varchar("nombre_titular", { length: 100 }).notNull(),
  direccion: varchar({ length: 255 }).notNull(),
  latitud: numeric({ precision: 9, scale: 6 }).notNull(),
  longitud: numeric({ precision: 9, scale: 6 }).notNull(),
  fechaAlta: timestamp("fecha_alta", { mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  foreignKey({
    columns: [table.idAgencia],
    foreignColumns: [agencia.id],
    name: "publicacion_id_agencia_fkey"
  }).onDelete("cascade"),
]);