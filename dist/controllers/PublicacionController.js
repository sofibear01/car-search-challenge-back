"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPublications = exports.createPublication = void 0;
const PublicacionService_1 = require("../services/PublicacionService");
const createPublication = async (req, res) => {
    const { agencyName, location } = req.body;
    const idAgencia = 1; //hardcoded
    const nombreTitular = agencyName;
    const direccion = location.address;
    const latitud = location.lat;
    const longitud = location.lng;
    try {
        await (0, PublicacionService_1.createPublicationService)(idAgencia, nombreTitular, direccion, latitud, longitud);
        return res.status(201).json({ message: 'Publication created successfully' });
    }
    catch (error) {
        console.error('Error creating publication:', error);
        return res.status(500).json({ error: 'Error creating publication en el controlador' });
    }
};
exports.createPublication = createPublication;
const getAllPublications = async (req, res) => {
    try {
        const publications = await (0, PublicacionService_1.getAllPublicationsService)();
        return res.status(200).json(publications);
    }
    catch (error) {
        console.error('Error fetching publications:', error);
        return res.status(500).json({ error: 'Error fetching publications' });
    }
};
exports.getAllPublications = getAllPublications;
