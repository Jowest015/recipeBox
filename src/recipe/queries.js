const getRecipe = "SELECT * FROM recipe";
const getRecipeById = "SELECT * FROM recipe WHERE id = $1";
const checkRecipeExists = "SELECT s FROM recipe s WHERE s.name = $1";
const addRecipe = "INSERT INTO recipe (name, ingredients, directions) VALUES ($1, $2, $3)";
const deleteRecipe = "DELETE FROM recipe WHERE id =$1";
const updateRecipe = "UPDATE recipe SET name = $1 WHERE id = $2";


module.exports = {
  getRecipe,
  getRecipeById,
  checkRecipeExists,
  addRecipe,
  deleteRecipe,
  updateRecipe,
};