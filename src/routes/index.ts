// filepath: /c:/Proyectos/car-search-challenge-back/backend/src/routes/index.ts
import { Router } from 'express';
import publicacionRoutes from './PublicacionRoutes';

const appRouter = Router();

// Rutas de publicaciones
appRouter.use('/publications', publicacionRoutes);

export default appRouter;