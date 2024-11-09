const express = require("express");
const { userControllers } = require("../controllers/userController");
const router = express.Router();

router.get("/", userControllers.read);
router.post("/create", userControllers.create);

module.exports = router;
