import axios from 'axios';
import { RECIPE_PUPPY_API_URL } from '../config';

function transform(recipe) {
  const { title, href } = recipe;

  const ingredients = recipe.ingredients
    .split(',')
    .map(i => i.trim())
    .sort();

  return {
    title,
    ingredients,
    link: href
  };
}

const getRecipes = async (keywords) => {
  const query = `?i=${keywords.join(',')}`;
  const url = `${RECIPE_PUPPY_API_URL}/${query}`;

  const response = await axios.get(url);
  const { results } = response.data;
  const recipes = results.map(transform);

  return {
    keywords,
    recipes
  };
};

export default { getRecipes };