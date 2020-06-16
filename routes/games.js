var express = require('express');
var router = express.Router();
const axios = require('axios');
const { Games } = require('../database/models');

//localhost:3000/games

// Route to get gamess from database
router.get('/', async (req, res, next) => {
  // try to get gamess object from api
  //const { pageNumber } = req.params;
  axios({
    method: 'GET',
    url: `https://rawg-video-games-database.p.rapidapi.com/games`,
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      'x-rapidapi-key': 'f1d85d3ba0msh59559d71189b3eap1b506ejsn09b190fe52de',
      useQueryString: true,
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
  //   try {

  //     // gamess will be the result of the games.findAll promise
  //     //const games = await Games.findAll();
  //     // if games is valid, it will be sent as a json response
  //    // console.log(games);
  //     res.status(200).json(games);
  //   } catch (err) {
  //     // if there is an error, it'll passed via the next parameter to the error handler middleware
  //     next(err);
  //   }
});

module.exports = router;
