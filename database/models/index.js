// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const User = require("./user");
const Comments = require("./comments");
const Likes = require("./likes");

User.hasMany(Comments);
Comments.belongsTo(User);

User.hasMany(Likes);
Likes.belongsTo(User);

module.exports = {
  User,
  Comments,
  Likes
};
