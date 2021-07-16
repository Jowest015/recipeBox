var express = require('express'),
    pgp = require('pg-promise')();
    path = require('path'),
    bodyParser = require('body-parser'),
    es6Renderer = require('express-es6-template-engine');
    // routes = require('./routes/');

var app = express();
var PORT = 2430;

//DB connect
const connect = {user:"postgres", password:"Mr6tBU?RSe", database: "recipebookdb"};
const db = pgp(connect);


// View engine setup
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(routes);

// DB engine
app.get('/', async (_req, res) => {

  const results = await db.query(`SELECT * FROM recipe`)
  res.send({results})

});

// Server
app.listen(PORT, ()=> {
  console.log(`Connection established at http://localhost:${PORT}`)
});