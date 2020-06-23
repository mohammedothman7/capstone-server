// Here, we can instantiate our database and use Sequelize as well;

// Module dependencies;
const Sequelize = require("sequelize");
const databaseName = require("../utils/databaseName");

// Confirmation message (limit these in production);
console.log("Opening database connection");

console.log(process.env.HEROKU_POSTGRESQL_PURPLE_URL);
// This is our entry point, we instantiate the Sequelize instance accordingly;
const db = new Sequelize(
  process.env.HEROKU_POSTGRESQL_PURPLE_URL ||
    `postgres://localhost:5432/${databaseName}`,
  { logging: false }
);

// Export our instance of Sequelize, which will be modified with models;
module.exports = db;
