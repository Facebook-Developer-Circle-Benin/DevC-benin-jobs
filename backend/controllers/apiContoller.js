const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/*USER API CONTROLLERS*/
exports.get_users = (req, res) => {
  res.send("hope");
};

exports.delete_user = (req, res) => {
  res.send("hope");
};

exports.post_user = (req, res) => {
  const {
    name,
    email,
    password,
    location,
    skillSet,
    socialMedia,
    phoneNumber,
    role,
  } = req.body;

  //Validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //check for existing user
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const newUser = new User({
      name,
      email,
      password,
      location,
      skillSet,
      socialMedia,
      phoneNumber,
      role,
    });
    //create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user.id },
            process.env.jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({ token, user });
            }
          );
        });
      });
    });
  });
};
