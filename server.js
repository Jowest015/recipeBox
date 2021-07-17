const express = require('express');
const dbroutes = require('./src/recipe/routes');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 2340;

// View engine setup
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

app.use(express.static(__dirname, +'/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.get('/', (req, res)=> {
  res.render("home");
});

app.use('/api/v1/recipes', dbroutes);

app.listen(port, ()=> {
  console.log(`Connection established at http://localhost:${port}`)
});