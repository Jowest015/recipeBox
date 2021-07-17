const pool = require('../../db');
const queries = require('./queries');

const getRecipe = (req, res) => {
  pool.query(queries.getRecipe, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getRecipeByName = (req, res) => {
  const { name } = req.body;
  pool.query(queries.getRecipeByName, [name], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addRecipe = (req, res) => {
  const { name, ingredients, directions } = req.body;
  // Check if recipe exists
  pool.query(queries.checkRecipeExists, [name], (error, results) => {
    if (results.rows.length) {
      res.send("Recipe already here");
    }
    // Add recipe to db
    pool.query(queries.addRecipe, [name, ingredients, directions], (error, results) => {
      if (error) throw error;
      res.status(201).send("Recipe made!");
    })
  });
};

const deleteRecipe = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getRecipeById, [id], (error, results) => {
    const recipeNotFound = !results.rows.length;
    if (recipeNotFound) {
    res.send("Recipe not here");
    }

    pool.query(queries.deleteRecipe, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("The recipe is no more, it has ceased to be...");
    });
  });
};

const updateRecipe = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, ingredients, directions } = req.body;

  pool.query(queries.getRecipeById, [id], (error, results) => {
    const recipeNotFound = !results.rows.length;
    if (recipeNotFound) {
    res.send("Recipe not here");
    }

    pool.query(queries.updateRecipe, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("The recipe is...better!");
    });
  });
};


module.exports = {
  getRecipe,
  getRecipeByName,
  addRecipe,
  deleteRecipe,
  updateRecipe,
};