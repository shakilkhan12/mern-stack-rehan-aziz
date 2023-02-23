const { body } = require("express-validator");
module.exports.userValidations = [
  body("name").not().isEmpty().trim().escape().withMessage("name is required"),
  body("email").isEmail().trim().escape().withMessage("email is required"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("password should be 5 characters long"),
];
