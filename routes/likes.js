var express = require("express");
var router = express.Router();
const { Likes, User } = require("../database/models");


router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const like = await Likes.findAndCountAll({
      where: { gameId: id },
      include: User,
    });
    console.log(like);
    res.status(200).json(like);
  } catch (err) {
    next(err);
  }
});

router.post("/:id", async (req, res, next) => {
  const { gameId, userId } = req.body;

  const likeObj = {
    gameId: gameId,
    userId: userId,
  };

  try {
    console.log("----------------", likeObj)
    const newLike = await Likes.create(likeObj);
    console.log("++++++++++++++++++++++++++++++", newLike)
    res.status(201).send(likeObj);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
