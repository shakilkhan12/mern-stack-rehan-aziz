const express = require("express");
const router = express.Router();
const { posts, home, register } = require("../controllers/userController");
router.get("/", home);
router.get("/posts", posts);
router.post("/register", register);
module.exports = router;
