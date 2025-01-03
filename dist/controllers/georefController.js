"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGeorefSuggestions = void 0;
const axios_1 = __importDefault(require("axios"));
const getGeorefSuggestions = async (req, res) => {
    const { query } = req.body;
    if (!query) {
        return res.status(400).json({ error: "La consulta (query) es requerida." });
    }
    try {
        const apiKey = process.env.VITE_GOOGLE_MAPS_API_KEY;
        console.log('entro a la funcion del get de google------');
        const response = await axios_1.default.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json`, {
            params: {
                input: query,
                key: apiKey,
                types: "geocode",
            },
        });
        const suggestions = response.data.predictions.map((prediction) => ({
            description: prediction.description,
            placeId: prediction.place_id,
        }));
        res.json(suggestions);
    }
    catch (error) {
        console.error("Error fetching data from Google Places API:", error);
        res.status(500).json({ error: "Error al obtener datos de Google Places API." });
    }
};
exports.getGeorefSuggestions = getGeorefSuggestions;
