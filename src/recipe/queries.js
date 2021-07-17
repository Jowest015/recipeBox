const getRecipe = "SELECT * FROM recipe";
const getRecipeById = "SELECT * FROM recipe WHERE id = $1";
const checkRecipeExists = "SELECT s FROM recipe s WHERE s.name = $1";
const addRecipe = "INSERT INTO recipe (name, ingredients, directions) VALUES ($1, $2, $3)";


module.exports = {
  getRecipe,
  getRecipeById,
  checkRecipeExists,
  addRecipe,
};