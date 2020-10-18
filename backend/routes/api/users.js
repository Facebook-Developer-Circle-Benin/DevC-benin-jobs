const express = require("express");
const router = express.Router();
const apiContoller = require("../../controllers/apiContoller");

//GET users
//find users
router.get("/", apiContoller.get_users);
//DELETE users
router.delete("/:id", apiContoller.delete_user);
//POST user
//create user
router.post("/", apiContoller.post_user);

module.exports = router;
