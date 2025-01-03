// filepath: /c:/Proyectos/car-search-challenge-back/backend/src/routes/publicacionRoutes.ts
import { Router } from 'express';
import { createPublication, getAllPublications } from '../controllers/PublicacionController';

const router = Router();

// Define la ruta POST para crear una publicación
router.post('/createPublication', createPublication);
router.get('/getAllPublications', getAllPublications);

export default router;