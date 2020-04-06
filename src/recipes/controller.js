import service from './service';
import { validationResult } from 'express-validator';

const getRecipes = async (req, res) => {
  try {
    validationResult(req).throw();

    const ingredients = req.query['i'];

    const recipes = await service.getRecipes(ingredients);

    res.json(recipes);
  } catch (err) {
    res.status(422).json(err);
  }
};

export default { getRecipes };