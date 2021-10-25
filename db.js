const Pool = require("pg").Pool;
const {
    DB_PORT,
    DB_PASSWORD,
    DB_USER,
    DB_HOST,
    DB_DATABASE,
} = require("./config");

const pool = new Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
});

module.exports = pool;
