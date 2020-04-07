import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;
export const RECIPE_PUPPY_API_URL = process.env.RECIPE_PUPPY_API_URL;
export const GIPHY_API_URL = process.env.GIPHY_API_URL;
export const GIPHY_API_KEY = process.env.GIPHY_API_KEY;