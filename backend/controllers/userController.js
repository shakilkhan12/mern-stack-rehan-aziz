const { validationResult } = require("express-validator");
const User = require("../models/user");
module.exports.home = (req, res) => {
  return res.status(200).json({ msg: "home route" });
};
module.exports.register = (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return res.status(200).json({ msg: "fine" });
  } else {
    return res.status(401).json({ errors: errors.array() });
  }
  const myData = req.body;
  return res.status(200).json({ data: myData });
};
