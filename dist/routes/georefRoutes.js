"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const georefController_1 = require("../controllers/georefController");
const router = (0, express_1.Router)();
// Ruta para obtener sugerencias de direcciones
router.post("/", georefController_1.getGeorefSuggestions);
exports.default = router;
