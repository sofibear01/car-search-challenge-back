"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rol = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.rol = (0, pg_core_1.pgTable)("rol", {
    id: (0, pg_core_1.serial)().primaryKey().notNull(),
    nombre: (0, pg_core_1.varchar)({ length: 50 }).notNull(),
}, (table) => [
    (0, pg_core_1.unique)("rol_nombre_key").on(table.nombre),
]);
