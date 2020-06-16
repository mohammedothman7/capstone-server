const Sequelize = require('sequelize');
const db = require('../db');

const Games = db.define('games', {
  id: { type: Sequelize.INTEGER, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  released: { type: Sequelize.STRING, allowNull: false },
  background_image: { type: Sequelize.STRING },
  metacritic: { type: Sequelize.INTEGER },
});

module.exports = Games;
