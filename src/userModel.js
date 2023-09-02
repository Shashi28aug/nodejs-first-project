var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  bio: String
}, {timestamps: true});

//exporting this module and creating collection named as "users"
module.exports = mongoose.model('User', UserSchema);