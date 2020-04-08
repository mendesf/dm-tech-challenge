import axios from 'axios';
import querystring from 'querystring';
import { GIPHY_API_URL, GIPHY_API_KEY } from '../config';
import { ExternalDependencyError } from '../errors';

function getRandomIndex(count) {
  return Math.floor(Math.random() * count);
}

const search = async (term) => {
  const query = querystring.stringify({
    api_key: GIPHY_API_KEY,
    q: term,
    rating: 'G'
  });
  const url = `${GIPHY_API_URL}/searc?${query}`;

  try {
    const res = await axios.get(url);
    const { data, pagination } = res.data;

    if (pagination.count === 0) {
      return '';
    }

    const index = getRandomIndex(pagination.count);
    const gif = data[index];

    return gif.embed_url;
  } catch (err) {
    console.error(err.response);
    throw new ExternalDependencyError('Nosso criador de GIFs está indisposto no momento', 'Recipe Puppy');
  }
}

export default { search };