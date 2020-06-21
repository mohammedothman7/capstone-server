const Sequelize = require("sequelize");
const db = require("../db");

const Likes = db.define("likes", {
  gameId: { type: Sequelize.INTEGER, allowNull: false },
  userId: { type: Sequelize.INTEGER, allowNull: false },
});

module.exports = Likes;