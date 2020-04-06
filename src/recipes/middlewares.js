const { query } = require('express-validator');

const ingredientsSanitizer = query('i')
  .customSanitizer((value) => !value ? [] : value.split(','));

export const ingredientsValidators = () => {
  const min = 1;
  const max = 3;
  const message = `You must provide at least ${min} and a maximum of ${max} ingredients`;

  return [
    ingredientsSanitizer,
    query('i', message).isArray({
      min: 1,
      max: 3
    })
  ];
};