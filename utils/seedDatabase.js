const { User, Comment } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({
      firstName: "John",
      lastName: "Smith",
      email: "JohnSmith@example.com",
      username: "JSmith123",
      password: "123",
    }),
    Comment.create({
      gameId: 1,
      commentId: 1,
      commentContent: "Hello World!",
    }),
  ]);
};

module.exports = seedDatabase;
