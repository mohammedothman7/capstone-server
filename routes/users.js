var express = require("express");
var router = express.Router();
const { User } = require("../database/models");

/* GET all users. */
// /api/users
router.get("/", async (req, res, next) => {
  // try to get users object from database
  try {
    // users will be the result of the User.findAll promise
    const users = await User.findAll();
    // if users is valid, it will be sent as a json response
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    // if there is an error, it'll passed via the next parameter to the error handler middleware
    next(err);
  }
});

module.exports = router;
