const Pool = require('pg').Pool;

const pool = new Pool({
    user: "gemha",
    host: "localhost",
    database: "shoutoutsapp",
    password: "Gem26072003opal!",
    port: 5432,
});

module.exports = pool;