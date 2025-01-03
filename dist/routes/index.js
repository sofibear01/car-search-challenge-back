"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// filepath: /c:/Proyectos/car-search-challenge-back/backend/src/routes/index.ts
const express_1 = require("express");
const PublicacionRoutes_1 = __importDefault(require("./PublicacionRoutes"));
const appRouter = (0, express_1.Router)();
// Rutas de publicaciones
appRouter.use('/publications', PublicacionRoutes_1.default);
exports.default = appRouter;
