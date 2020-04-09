import { Router } from 'express';
import { ingredientsValidators } from './middlewares';
import controller from './controller';

const router = Router();

router.get('/', ingredientsValidators(), controller.getRecipes);

export default router;
