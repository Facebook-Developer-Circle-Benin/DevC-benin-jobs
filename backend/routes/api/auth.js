const express = require("express");
const router = express.Router();
const authController = require("../../controllers/authController");
const auth = require("../../middleware/auth");

/* 
GET userData
private route
*/
router.get("/user", auth, authController.get_userdata);
//DELETE users
router.delete("/:id", authController.delete_user);
//POST user
//create user
//public
router.post("/", authController.post_user);

module.exports = router;
