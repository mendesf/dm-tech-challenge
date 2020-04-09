import { Router } from 'express';
import recipesRoutes from './recipes/routes';

const router = Router();

router.use('/recipes', recipesRoutes);

export default router;
