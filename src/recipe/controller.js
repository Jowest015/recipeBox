const pool = require('../../db');
const queries = require('./queries');

const getRecipe = (req, res) => {
  pool.query(queries.getRecipe, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getRecipeById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getRecipeById, [id], (error, results) => {
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

module.exports = {
  getRecipe,
  getRecipeById,
  addRecipe,
};