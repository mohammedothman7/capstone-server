// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;
<<<<<<< HEAD
=======

const User = require('./user');
const Comments = require('./comments');

User.hasMany(Comments);
Comments.belongsTo(User);
/*
>>>>>>> 82959a9dbe92c65e35f3b3505979542ef14ea6f8

const User = require("./user");

module.exports = {
  User,
};
<<<<<<< HEAD
=======
*/

module.exports = {
  User,
  Comments,
};
>>>>>>> 82959a9dbe92c65e35f3b3505979542ef14ea6f8
