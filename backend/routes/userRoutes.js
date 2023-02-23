const express = require("express");
const { userValidations } = require("../validations/userValidations");
const router = express.Router();
const { posts, home, register } = require("../controllers/userController");
router.get("/", home);
router.post("/register", userValidations, register);
module.exports = router;
