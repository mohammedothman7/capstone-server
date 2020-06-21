const { User, Comments, Likes } = require("../database/models");

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
    User.create({
      firstName: "George",
      lastName: "Foreman",
      email: "GeorgeForeman@example.com",
      username: "gfore",
      password: "11111",
    }),
    Comments.create({
      gameId: 2,
      userId: 1,
      commentContent: "Hello World!",
    }),
    Comments.create({
      gameId: 5,
      userId: 2,
      commentContent: "Hello World!",
    }),
    Comments.create({
      gameId: 2,
      userId: 2,
      commentContent: "Hello World!!!!!!!!!!!!!!",
      user: {
        firstName: "John",
        lastName: "Smith",
        email: "JohnSmith@example.com",
        username: "JSmith123",
        password: "123",
      },
    }),
    Comments.create({
      gameId: 20,
      userId: 1,
      commentContent: "Hello World!",
    }),
    Likes.create({
      gameId: 4200,
      userId: 1,
    }),
    Likes.create({
      gameId: 2,
      userId: 2,
    }),
    Likes.create({
      gameId: 4200,
      userId: 3,
    }),
  ]);
};

module.exports = seedDatabase;
