"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuario = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("./schema");
exports.usuario = (0, pg_core_1.pgTable)("usuario", {
    id: (0, pg_core_1.serial)().primaryKey().notNull(),
    idSupabase: (0, pg_core_1.uuid)("id_supabase").notNull(),
    nombre: (0, pg_core_1.varchar)({ length: 100 }).notNull(),
    email: (0, pg_core_1.varchar)({ length: 100 }).notNull(),
    idRol: (0, pg_core_1.integer)("id_rol").notNull(),
    fechaAlta: (0, pg_core_1.timestamp)("fecha_alta", { mode: 'string' }).default((0, drizzle_orm_1.sql) `CURRENT_TIMESTAMP`),
}, (table) => [
    (0, pg_core_1.foreignKey)({
        columns: [table.idRol],
        foreignColumns: [schema_1.rol.id],
        name: "usuario_id_rol_fkey"
    }).onDelete("restrict"),
    (0, pg_core_1.unique)("usuario_id_supabase_key").on(table.idSupabase),
    (0, pg_core_1.unique)("usuario_email_key").on(table.email),
]);
