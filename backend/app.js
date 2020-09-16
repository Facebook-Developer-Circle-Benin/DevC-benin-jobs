const express = require('express');
const chalk = require('chalk');

const app = express();

const PORT = process.env.PORT || 5000;
const localhost = '127.0.0.1';

app.get('/', (req, res) => {
  res.json('Welcome to Homepage');
});

app.listen(PORT, () => {
  console.log(chalk.green.bold(`The magic happens on ${localhost}:${PORT}`));
});

module.exports = app;
