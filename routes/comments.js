var express = require("express");
var router = express.Router();
const { Comments, User } = require("../database/models");
const { use } = require("./user");

// Route to get comments associated with a game
// /api/gamePage/:id/comments
// /api/gamePage/456/comments
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const comment = await Comments.findAll({
      where: { gameId: id },
      include: User,
    });
    console.log(comment);
    res.status(200).json(comment);
  } catch (err) {
    next(err);
  }
});

router.post("/:id", async (req, res, next) => {

  const { gameId, userId, commentContent } = req.body;

  const commentObj = {
    gameId: gameId,
    userId: userId,
    commentContent: commentContent,
  };

  try {
    const newComment = await Comments.create(commentObj);
    res.status(201).send(newComment);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
