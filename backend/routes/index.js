const express = require("express");
const router = express.Router();
const htmlController = require("../controllers/htmlController");
router.get("/", htmlController.get_homePage);

module.exports = router;
