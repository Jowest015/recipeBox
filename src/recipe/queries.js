const getRecipe = "SELECT * FROM recipe";
const getRecipeByName = "SELECT s FROM recipe s WHERE s.name = $1";
const checkRecipeExists = "SELECT s FROM recipe s WHERE s.name = $1";
const addRecipe = "INSERT INTO recipe (name, ingredients, directions) VALUES ($1, $2, $3)";
const deleteRecipe = "DELETE FROM recipe WHERE id =$1";
const updateRecipe = "UPDATE recipe SET name = $1 WHERE id = $2";


module.exports = {
  getRecipe,
  getRecipeByName,
  checkRecipeExists,
  addRecipe,
  deleteRecipe,
  updateRecipe,
};