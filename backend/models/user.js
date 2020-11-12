const mongoose = require("mongoose");
//define Schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  location: [
    {
      country: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
    },
  ],
  skillSet: [{ type: String, trim: true }],
  socialMedia: [{ type: String, trim: true }],
  phoneNumber: { type: Number },
  role: { type: String },
});

//create model
var User = mongoose.model("user", userSchema);

module.exports = User;
