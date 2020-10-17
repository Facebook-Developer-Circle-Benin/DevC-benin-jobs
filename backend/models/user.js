const mongoose = require("mongoose");
//define Schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  email: { type: String },
});

//create model
var User = mongoose.model("user", userSchema);
module.exports = User;
