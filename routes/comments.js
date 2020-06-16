var express = require('express');
var router = express.Router();
const { Comments } = require('../database/models');


// Route to get comments associated with a game
// /api/gamePage/:id/comments
// /api/gamePage/456/comments
router.get('/:id', async (req, res, next) => {

    const {id} = req.params;
    try {
      const comment = await Comments.findAll({where: {gameId : id} });
      console.log(comment);
      res.status(200).json(comment);
    } catch (err) {
      next(err);
    }
  });
  
  module.exports = router;
  