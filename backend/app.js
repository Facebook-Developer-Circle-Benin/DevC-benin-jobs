const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const chalk = require("chalk");
const userApi = require("./routes/api/users");
const authApi = require("./routes/api/auth");

const adminRoute = require("./routes/admin");

const app = express();

const PORT = process.env.PORT || 5000;
const localhost = "127.0.0.1";

//read from body
app.use(express.json());

//database config
//defualt mongoose connection
const mongoDB = process.env.mongoURI;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//get defualt connection
const db = mongoose.connection;

//bind connection to error event
db.on("error", console.error.bind(console, "MongoDB connection error:"));
//success
db.once("open", () => {
  console.log("Connected");
});
//database config

//routes
app.use("/admin", adminRoute);
app.use("/api/users", userApi);
app.use("/api/auth", authApi);

app.listen(PORT, () => {
  //console.log("server running on ", PORT);
  console.log(chalk.green.bold(`The magic happens on ${localhost}:${PORT}`));
});

module.exports = app;

//to run
//C:/Users/REGINALD/DevC-benin-jobs/backend/app.js
