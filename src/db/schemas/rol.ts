import { pgTable, unique, serial, varchar, foreignKey, uuid, integer, timestamp, numeric } from "drizzle-orm/pg-core"


export const rol = pgTable("rol", {
    id: serial().primaryKey().notNull(),
    nombre: varchar({ length: 50 }).notNull(),
}, (table) => [
    unique("rol_nombre_key").on(table.nombre),
]);