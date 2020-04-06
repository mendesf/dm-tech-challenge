const getRecipes = async (ingredients) => {
  const keywords = ingredients.split(',');
  const result = { keywords };

  return result;
}

export default { getRecipes };