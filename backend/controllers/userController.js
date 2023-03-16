const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../models/user");
module.exports.home = (req, res) => {
  return res.status(200).json({ msg: "home route" });
};
module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  const { name, email, password } = req.body;
  if (errors.isEmpty()) {
    // if no error
    // check duplicate email
    const checkEmail = await User.findOne({ email: email });
    if (!checkEmail) {
      //  you can take this email
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
      const user = await User.create({
        name,
        email,
        password: hashed,
      });
      return res
        .status(201)
        .json({ msg: "Your account has been created successfully", user });
    } else {
      // email already exist
      return res.status(401).json({ error: `${email} is already exist` });
    }
  } else {
    // if we have an errors then return errors
    return res.status(401).json({ errors: errors.array() });
  }
  const myData = req.body;
  return res.status(200).json({ data: myData });
};
