const Sequelize = require('sequelize');
const db = require('../db');

const Comments = db.define('comments', {
  gameId: { type: Sequelize.INTEGER, allowNull: false },
  userId: { type: Sequelize.INTEGER, allowNull: false },
  commentContent: { type: Sequelize.TEXT, allowNull: false },
});

module.exports = Comments;
