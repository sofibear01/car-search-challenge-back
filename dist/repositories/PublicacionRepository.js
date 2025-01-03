"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPublications = exports.insertPublication = void 0;
const publicacion_1 = require("../db/schemas/publicacion");
const insertPublication = async (db, idAgencia, nombreTitular, direccion, latitud, longitud) => {
    try {
        return await db.insert(publicacion_1.publicacion).values({
            idAgencia,
            nombreTitular,
            direccion,
            latitud: latitud.toFixed(6),
            longitud: longitud.toFixed(6),
        });
    }
    catch (error) {
        console.error('Error inserting publication en el repositorio:', error);
        throw new Error('Error inserting publication en el repositorio');
    }
};
exports.insertPublication = insertPublication;
const getAllPublications = async (db) => {
    try {
        return await db.select().from(publicacion_1.publicacion);
    }
    catch (error) {
        console.error('Error fetching publications:', error);
        throw new Error('Error fetching publications');
    }
};
exports.getAllPublications = getAllPublications;
