const { Pool } = require("pg");

// Connect Pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "recipebookdb",
  password: "Mr6tBU?RSe",
  port: 5432,
});

pool.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

// Show db data
exports.view = (req, res) => {

  // callback - checkout a client
  pool.connect((err, client, done) => {
    if (err) throw err;
    client.query("SELECT * FROM recipedb", (err, rows) => {

      if(!err) {
        res.render("recipes", rows);
        done();
        
      } else {
        console.log(err.stack);
      }
      // console.log('data from table: \n', rows);
    });
  });
};

// Search function

exports.find = (req, res) => {


  let search = req.body.search;

  pool.connect((err, client, done) => {
    if (err) throw err;
    client.query("SELECT * FROM recipedb WHERE name LIKE ?", ['%' + search + '%'], (err, rows) => {

      if(!err) {
        res.render("recipes", rows);
        done();
        
      } else {
        console.log(err.stack);
      }
      // console.log('data from table: \n', rows);
    });
  });
};
