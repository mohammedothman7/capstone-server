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
    User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohnDoe@example.com',
      username: 'JDoe123',
      password: '123',
    }),
    Comments.create({
      gameId: 2,
      userId: 1,
      commentContent: 'Hello World!',
    }),
    Comments.create({
      gameId: 5,
      userId: 2,
      commentContent: 'Hello World!',
    }),
    Comments.create({
      gameId: 2,
      userId: 2,
      commentContent: 'Hello World!',
    }),
    Comments.create({
      gameId: 20,
      userId: 1,
      commentContent: 'Hello World!',
    }),
  ]);
};

module.exports = seedDatabase;
