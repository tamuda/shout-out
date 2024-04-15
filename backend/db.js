const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "shoutoutsapp",
  password: "qwerty",
  port: 5432,
});

//shoutoutsapp

module.exports = pool;
