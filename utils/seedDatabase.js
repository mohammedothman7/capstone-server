const { User } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({
      firstName: "James",
      lastName: "Riley",
      email: "JRiley@gmail.com",
      username: "Jriley01",
      password: "password",
    }),
  ]);
};

module.exports = seedDatabase;
