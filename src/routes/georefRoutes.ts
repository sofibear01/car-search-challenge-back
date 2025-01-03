import { Router, Request, Response } from "express";
import { getGeorefSuggestions } from "../controllers/georefController";

const router = Router();

// Ruta para obtener sugerencias de direcciones
router.post("/", getGeorefSuggestions);

export default router;
