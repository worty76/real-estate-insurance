const express = require("express");
const { userControllers } = require("../controllers/userController");
const router = express.Router();

router.get("/", userControllers.read);
router.post("/create", userControllers.create);
router.post("/update/:userId", userControllers.update);
router.delete("/delete/:userId", userControllers.deleteUser);
module.exports = router;
