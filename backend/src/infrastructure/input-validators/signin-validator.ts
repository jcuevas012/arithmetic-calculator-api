import { body } from "express-validator"

const signInValidator = () => [
  body("username").isEmail().withMessage("Email must be valid"),
  body("password").trim().notEmpty().withMessage("Password is not valid"),
]


export { signInValidator }