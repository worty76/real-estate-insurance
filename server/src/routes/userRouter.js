const express = require("express");
const { userControllers } = require("../controllers/userController");
const router = express.Router();

router.get("/", userControllers.read);

module.exports = router;
