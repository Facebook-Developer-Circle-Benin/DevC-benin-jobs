const User = require("../models/user");
const Job = require("../models/job");
/*USER API CONTROLLERS*/
exports.get_users = (req, res) => {
  res.send("hope");
};

exports.delete_user = (req, res) => {
  res.send("hope");
};

exports.post_user = (req, res) => {
  const newUser = new User(req.body);

  newUser.save().then((user) => {
    res.json(user);
  });
};
