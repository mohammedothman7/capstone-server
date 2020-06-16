var express = require('express');
var router = express.Router();
const { User } = require('../database/models');

// Route to get users from database
router.get('/', async (req, res, next) => {
  // try to get users object from database
  try {
    // users will be the result of the User.findAll promise
    const user = await User.findAll();
    // if user is valid, it will be sent as a json response
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    // if there is an error, it'll passed via the next parameter to the error handler middleware
    next(err);
  }
});

module.exports = router;
