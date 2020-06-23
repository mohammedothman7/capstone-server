// Here, we can instantiate our database and use Sequelize as well;

// Module dependencies;
const Sequelize = require("sequelize");
const databaseName = require("../utils/databaseName");
const { Client } = require("pg");

// Confirmation message (limit these in production);
console.log("Opening database connection");

console.log(process.env.HEROKU_POSTGRESQL_PURPLE_URL);
// This is our entry point, we instantiate the Sequelize instance accordingly;
const db = new Sequelize(
  process.env.PORT || `postgres://localhost:5432/${databaseName}`,
  { logging: false }
);

// const client = new Client({
//   connectionString: process.env.HEROKU_POSTGRESQL_PURPLE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

//client.connect();

// Export our instance of Sequelize, which will be modified with models;
module.exports = db;
