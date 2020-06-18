const { User } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({
      firstName: "John",
      lastName: "Smith",
      email: "JohnSmith@example.com",
      username: "JSmith123",
      password: "123",
    }),
    User.create({
      firstName: "John",
      lastName: "Doe",
      email: "JohnDoe@example.com",
      username: "JDoe123",
      password: "123",
    }),
  ]);
};

module.exports = seedDatabase;
