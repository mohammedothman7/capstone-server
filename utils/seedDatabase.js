<<<<<<< HEAD
const { User } = require("../database/models");
=======
const { User } = require('../database/models');
>>>>>>> 82959a9dbe92c65e35f3b3505979542ef14ea6f8

const seedDatabase = async () => {
  await Promise.all([
    User.create({
<<<<<<< HEAD
      firstName: "James",
      lastName: "Riley",
      email: "JRiley@gmail.com",
      username: "Jriley01",
      password: "password",
=======
      firstName: 'John',
      lastName: 'Smith',
      email: 'JohnSmith@example.com',
      username: 'JSmith123',
      password: '123',
>>>>>>> 82959a9dbe92c65e35f3b3505979542ef14ea6f8
    }),
  ]);
};

module.exports = seedDatabase;
