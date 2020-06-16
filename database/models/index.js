// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const User = require('./user');
const Comments = require('./comments');

User.hasMany(Comments);
Comments.belongsTo(User);
/*

Campus.hasMany(Student);

Student.belongsTo(Campus);

module.exports = {
  Campus,
  Student,
};
*/

module.exports = {
  User,
  Comments,
};
