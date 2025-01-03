import { Request, Response } from "express";
import axios from "axios";

export const getGeorefSuggestions = async (req: Request, res: Response) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "La consulta (query) es requerida." });
  }

  try {
    const apiKey = process.env.VITE_GOOGLE_MAPS_API_KEY;
    console.log('entro a la funcion del get de google------')
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json`,
      {
        params: {
          input: query,
          key: apiKey,
          types: "geocode",
        },
      }
    );

    const suggestions = response.data.predictions.map((prediction: any) => ({
      description: prediction.description,
      placeId: prediction.place_id,
    }));

    res.json(suggestions);
  } catch (error) {
    console.error("Error fetching data from Google Places API:", error);
    res.status(500).json({ error: "Error al obtener datos de Google Places API." });
  }
};
