const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'newdb',
  password: process.env.DB_PASSWORD,
  post: 5432
});

module.exports = pool;
