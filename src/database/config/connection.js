const { Pool } = require('pg');
require('dotenv').config();

const options = {
  connectionString: process.env.DB_URL,
  ssl: false,
};

const connection = new Pool(options);

module.exports = connection;
