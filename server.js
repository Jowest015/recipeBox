const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const pg = require('pg');

// Router connectivity
const app = express();
const port = 3000;

// Static file setup: connect CSS
app.use(express.static(__dirname, +'/public'));

// Setup parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// View engine setup
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');


app.listen(port, ()=> {
  console.log(`Connection established at http://localhost:${port}`)
});