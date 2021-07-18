const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "recipebookdb",
  password: "Mr6tBU?RSe",
  port: 5432,
});

module.exports = pool;