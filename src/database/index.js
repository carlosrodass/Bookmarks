const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DEVELOPMENT_DB_HOST,
    user: process.env.DEVELOPMENT_DB_USER,
    password: process.env.DEVELOPMENT_DB_PASSWORD,
    database: process.env.DEVELOPMENT_DB_DB
});


module.exports = pool;