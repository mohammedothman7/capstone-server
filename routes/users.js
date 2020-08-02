var express = require("express");
const bcrypt = require('bcrypt')
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

/* GET a user with specific credentials. */
router.get("/:username/:password", async (req, res, next) => {
  try {
    // Getting user from database by username
    const user = await User.findOne({
      where: {
        username: req.params.username,
      },
    });
    
    // Verifying password matches hashed
    bcrypt.compare(req.params.password, user.password, function(err, response) {
      if(response){
        res.status(200).json(user);
      } else {
        res.status(401).json();
      }
    })
  } catch (err) {
    next(err);
  }
});

// Route to handle adding a user
// /api/users/
router.post("/", async (req, res, next) => {
  // Take the form data from the request body
  const { firstName, lastName, email, username, password } = req.body;

  // Hashing password
  bcrypt.hash(password, 10, async function(err, hash) {
    if (err) next(err);

    // Create a user object
    const userObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: hash,
    };
  
    try {
      // Create a new user on the database
      const newUser = await User.create(userObj);
      // The database would return a user
      // send that user as a json to the client
      res.status(201).send(newUser);
    } catch (err) {
      next(err);
    }
  });
});

module.exports = router;
