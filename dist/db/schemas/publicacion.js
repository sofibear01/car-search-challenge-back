"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicacion = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const agencia_1 = require("./agencia");
exports.publicacion = (0, pg_core_1.pgTable)("publicacion", {
    id: (0, pg_core_1.serial)().primaryKey().notNull(),
    idAgencia: (0, pg_core_1.integer)("id_agencia").notNull(),
    nombreTitular: (0, pg_core_1.varchar)("nombre_titular", { length: 100 }).notNull(),
    direccion: (0, pg_core_1.varchar)({ length: 255 }).notNull(),
    latitud: (0, pg_core_1.numeric)({ precision: 9, scale: 6 }).notNull(),
    longitud: (0, pg_core_1.numeric)({ precision: 9, scale: 6 }).notNull(),
    fechaAlta: (0, pg_core_1.timestamp)("fecha_alta", { mode: 'string' }).default((0, drizzle_orm_1.sql) `CURRENT_TIMESTAMP`),
}, (table) => [
    (0, pg_core_1.foreignKey)({
        columns: [table.idAgencia],
        foreignColumns: [agencia_1.agencia.id],
        name: "publicacion_id_agencia_fkey"
    }).onDelete("cascade"),
]);
