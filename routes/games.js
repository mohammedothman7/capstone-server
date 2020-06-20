var express = require("express");
var router = express.Router();
const axios = require("axios");
const { Games } = require("../database/models");

//localhost:3000/games

// Route to get gamess from database
router.get("/", async (req, res, next) => {
  // try to get gamess object from api
  //console.log(req);
  const { page, page_size, ordering, dates, genres } = req.query;

  console.log(req.query);
  axios
    .get("https://api.rawg.io/api/games", {
      params: {
        page,
        page_size,
        genres,
        ordering,
        dates,
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
      }
      //console.log(game);
      //console.log(games);
      res.status(200).json(allGamesArray);
    })
    .catch((error) => {
      next(error);
    });
});

// Route to search for games
router.get("/search", async (req, res, next) => {
  // Get search query from request
  const { search } = req.query;

  // Call API to search for games
  axios
    .get("https://api.rawg.io/api/games", {
      params: {
        search,
      },
    })
    .then((response) => {
      const games = response.data.results;
      const allGamesArray = [];

      // Iterrate through array to get data we need
      for (let i = 0; i < games.length; i++) {
        const game = {
          id: games[i].id,
          name: games[i].name,
          background_image: games[i].background_image,
          metacritic: games[i].metacritic,
        };
        allGamesArray.push(game);
      }

      // Send data back to frontend
      res.status(200).json(allGamesArray);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
