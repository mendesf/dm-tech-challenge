import axios from 'axios';
import { RECIPE_PUPPY_API_URL } from '../config';
import giphyService from '../giphy/service';
import { ExternalDependencyError } from '../errors';

function transform(recipe) {
  const { href } = recipe;
  let { title, ingredients } = recipe;

  title = title.replace(/\r|\n|\t/, '').trim();

  ingredients = ingredients
    .split(',')
    .map(i => i.trim())
    .sort();

  return {
    title,
    ingredients,
    link: href
  };
}

async function search(keywords) {
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
}

const getRecipes = async (keywords) => {
  const recipes = await search(keywords);
  const promises = recipes.map(r => giphyService.search(r.title));
  const gifs = await Promise.all(promises);

  recipes.forEach((r, i) => {
    r.gif = gifs[i];
  });

  return {
    keywords,
    recipes
  };
};

export default { getRecipes };