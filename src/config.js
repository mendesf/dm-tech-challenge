import dotenv from 'dotenv';

dotenv.config();

export const {
  PORT,
  RECIPE_PUPPY_API_URL,
  GIPHY_API_URL,
  GIPHY_API_KEY,
} = process.env;
