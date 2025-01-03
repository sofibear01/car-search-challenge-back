"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPublicationsService = exports.createPublicationService = void 0;
const PublicacionRepository_1 = require("../repositories/PublicacionRepository");
const db_1 = require("../db");
const createPublicationService = async (idAgencia, nombreTitular, direccion, latitud, longitud) => {
    try {
        return await (0, PublicacionRepository_1.insertPublication)(db_1.db, idAgencia, nombreTitular, direccion, latitud, longitud);
    }
    catch (error) {
        console.error('Error creating publication en el servicio:', error);
        throw new Error('Error creating publication en el servicio');
    }
};
exports.createPublicationService = createPublicationService;
const getAllPublicationsService = async () => {
    try {
        return await (0, PublicacionRepository_1.getAllPublications)(db_1.db);
    }
    catch (error) {
        console.error('Error fetching publications en el servicio:', error);
        throw new Error('Error fetching publications en el servicio');
    }
};
exports.getAllPublicationsService = getAllPublicationsService;
