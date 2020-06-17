var express = require('express');
var router = express.Router();
const axios = require('axios');
const { Games } = require('../database/models');

//localhost:3000/games

// Route to get gamess from database
router.get('/', async (req, res, next) => {
  // try to get gamess object from api
  //console.log(req);
  const { page, page_size } = req.query;
  // const param = req.query.filter;
  console.log(req.query);
  axios
    .get('https://api.rawg.io/api/games', {
      params: {
        page,
        page_size,
      },
    })
    .then((response) => {
      const games = response.data.results;
      const allGamesArray = [];
      //const { id, name, released, background_image, metacritic } = games;
      // console.log(id, name, released, background_image, metacritic);
      for (let i = 0; i < games.length; i++) {
        const game = {
          id: games[i].id,
          name: games[i].name,
          background_image: games[i].background_image,
          metacritic: games[i].metacritic,
        };
        allGamesArray.push(game);
        //console.log(game);
      }
      //console.log(games);
      res.status(200).json(allGamesArray);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
