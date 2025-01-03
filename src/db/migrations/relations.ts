import { relations } from "drizzle-orm/relations";
import { rol, usuario, agencia, publicacion } from "../schemas/schema";

export const usuarioRelations = relations(usuario, ({one, many}) => ({
	rol: one(rol, {
		fields: [usuario.idRol],
		references: [rol.id]
	}),
	agencias: many(agencia),
}));

export const rolRelations = relations(rol, ({many}) => ({
	usuarios: many(usuario),
}));

export const agenciaRelations = relations(agencia, ({one, many}) => ({
	usuario: one(usuario, {
		fields: [agencia.idUsuario],
		references: [usuario.id]
	}),
	publicacions: many(publicacion),
}));

export const publicacionRelations = relations(publicacion, ({one}) => ({
	agencia: one(agencia, {
		fields: [publicacion.idAgencia],
		references: [agencia.id]
	}),
}));