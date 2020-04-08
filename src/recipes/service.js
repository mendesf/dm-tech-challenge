import axios from 'axios';
import { RECIPE_PUPPY_API_URL } from '../config';
import giphyService from '../giphy/service';
import { ExternalDependencyError } from '../errors';

const transform = (recipe) => {
  const { href } = recipe;
  let { title, ingredients } = recipe;

  title = title.replace(/\r|\n|\t/, '').trim();

  ingredients = ingredients
    .split(',')
    .map(ingredient => ingredient.trim())
    .sort();

  return {
    title,
    ingredients,
    link: href
  };
};

const search = async (keywords) => {
  const query = `?i=${keywords.join(',')}`;
  const url = RECIPE_PUPPY_API_URL + query;

  try {
    const res = await axios.get(url);
    const { results } = res.data;
    const recipes = results.map(transform);

    return recipes;
  } catch (err) {
    console.error(err.response);
    throw new ExternalDependencyError('Não encontramos nosso livro de receitas', 'GIPHY');
  }
};

const getRecipes = async (keywords) => {
  const recipes = await search(keywords);
  const promises = recipes.map(recipe => giphyService.search(recipe.title));
  const gifs = await Promise.all(promises);

  recipes.forEach((recipe, i) => {
    recipe.gif = gifs[i];
  });

  return {
    keywords,
    recipes
  };
};

export default { getRecipes };