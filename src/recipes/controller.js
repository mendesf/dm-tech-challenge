import service from './service';

const getRecipes = async (req, res) => {
  const ingredients = req.query['i'];
  const recipes = await service.getRecipes(ingredients);
  
  res.json(recipes);
};

export default { getRecipes };