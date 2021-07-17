const express = require('express');
const dbroutes = require('./src/recipe/routes');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

// Router connectivity
const { getRecipe, getRecipeByName } = require('./src/recipe/queries');
const { queryResult } = require('pg-promise');
const pool = require('./db');
const { connect } = require('./src/recipe/routes');
const queries = require('./src/recipe/queries');
const { Client } = require('pg');

const app = express();
const port = 2340;

// View engine setup
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');

// Static file setup: connect CSS
app.use(express.static(__dirname, +'/public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.get('/', (req, res, next)=> {
  res.render('home');
  next();
});

app.use('/recipes', dbroutes);

app.listen(port, ()=> {
  console.log(`Connection established at http://localhost:${port}`)
});