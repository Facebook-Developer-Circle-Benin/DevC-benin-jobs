const mongoose = require("mongoose");
//define Schema
const Schema = mongoose.Schema;

var jobSchema = new Schema({
  title: { type: String },
  duration: { type: String },
});

//create model
const Job = mongoose.model("job", jobSchema);
module.exports = Job;
