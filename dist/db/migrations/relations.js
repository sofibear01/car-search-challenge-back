"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicacionRelations = exports.agenciaRelations = exports.rolRelations = exports.usuarioRelations = void 0;
const relations_1 = require("drizzle-orm/relations");
const schema_1 = require("../schemas/schema");
exports.usuarioRelations = (0, relations_1.relations)(schema_1.usuario, ({ one, many }) => ({
    rol: one(schema_1.rol, {
        fields: [schema_1.usuario.idRol],
        references: [schema_1.rol.id]
    }),
    agencias: many(schema_1.agencia),
}));
exports.rolRelations = (0, relations_1.relations)(schema_1.rol, ({ many }) => ({
    usuarios: many(schema_1.usuario),
}));
exports.agenciaRelations = (0, relations_1.relations)(schema_1.agencia, ({ one, many }) => ({
    usuario: one(schema_1.usuario, {
        fields: [schema_1.agencia.idUsuario],
        references: [schema_1.usuario.id]
    }),
    publicacions: many(schema_1.publicacion),
}));
exports.publicacionRelations = (0, relations_1.relations)(schema_1.publicacion, ({ one }) => ({
    agencia: one(schema_1.agencia, {
        fields: [schema_1.publicacion.idAgencia],
        references: [schema_1.agencia.id]
    }),
}));
