"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agencia = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("./schema");
exports.agencia = (0, pg_core_1.pgTable)("agencia", {
    id: (0, pg_core_1.serial)().primaryKey().notNull(),
    nombre: (0, pg_core_1.varchar)({ length: 100 }).notNull(),
    direccion: (0, pg_core_1.varchar)({ length: 255 }).notNull(),
    latitud: (0, pg_core_1.numeric)({ precision: 9, scale: 6 }).notNull(),
    longitud: (0, pg_core_1.numeric)({ precision: 9, scale: 6 }).notNull(),
    idUsuario: (0, pg_core_1.integer)("id_usuario"),
    fechaAlta: (0, pg_core_1.timestamp)("fecha_alta", { mode: 'string' }).default((0, drizzle_orm_1.sql) `CURRENT_TIMESTAMP`),
}, (table) => [
    (0, pg_core_1.foreignKey)({
        columns: [table.idUsuario],
        foreignColumns: [schema_1.usuario.id],
        name: "agencia_id_usuario_fkey"
    }).onDelete("set null"),
    (0, pg_core_1.unique)("agencia_id_usuario_key").on(table.idUsuario),
]);
