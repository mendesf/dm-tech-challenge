import service from './service';
import { validationResult } from 'express-validator';
import { ExternalDependenciesError } from '../utils/errors';

const getRecipes = async (req, res) => {
  try {
    validationResult(req).throw();

    const ingredients = req.query['i'];
    const recipes = await service.getRecipes(ingredients);

    res.json(recipes);
  } catch (err) {
    if (err instanceof ExternalDependenciesError) {
      res.status(502).json({ errors: [err] });
      return;
    }

    res.status(422).json(err);
  }
};

export default { getRecipes };