import { validationResult } from 'express-validator';
import service from './service';
import { ExternalDependencyError } from '../errors';

const getRecipes = async (req, res) => {
  try {
    validationResult(req).throw();

    const ingredients = req.query.i;
    const recipes = await service.getRecipes(ingredients);

    res.json(recipes);
  } catch (err) {
    if (err instanceof ExternalDependencyError) {
      res.status(502).json({ errors: [err] });
      return;
    }

    res.status(422).json(err);
  }
};

export default { getRecipes };
