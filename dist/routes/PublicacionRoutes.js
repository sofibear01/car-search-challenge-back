"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// filepath: /c:/Proyectos/car-search-challenge-back/backend/src/routes/publicacionRoutes.ts
const express_1 = require("express");
const PublicacionController_1 = require("../controllers/PublicacionController");
const router = (0, express_1.Router)();
// Define la ruta POST para crear una publicación
router.post('/createPublication', PublicacionController_1.createPublication);
router.get('/getAllPublications', PublicacionController_1.getAllPublications);
exports.default = router;
