//Dependencies
const pgp = require('pg-promise')();

//Config
require('dotenv').config();

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};

const db = pgp(cn);

//Exports
module.exports = db;
