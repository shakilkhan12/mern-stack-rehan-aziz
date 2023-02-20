const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  const users = [
    { id: 1, name: "Rehan" },
    { id: 2, name: "Aziz" },
    { id: 3, name: "Shakil" },
    { id: 4, name: "Sajid" },
  ];
  return res.status(200).json({ msg: "home route", users });
});
router.get("/posts", (req, res) => {
  const posts = [
    { id: 1, title: "first post" },
    { id: 2, title: "second post" },
    { id: 3, title: "thid post" },
    { id: 4, title: "fourth post" },
    { id: 5, title: "fifth post" },
  ];
  return res.status(200).json({ posts });
});
router.post("/register", (req, res) => {
  const myData = req.body;
  return res.status(200).json({ data: myData });
});
module.exports = router;