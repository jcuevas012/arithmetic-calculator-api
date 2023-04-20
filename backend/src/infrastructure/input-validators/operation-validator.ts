import { body } from "express-validator"



const operationValidator = () => [
  body("operationId")
    .isUUID()
    .withMessage("Operation id must be valid"),
  body("firstValue")
    .isInt({ min: 0 })
    .withMessage("first value must be valid"),
  body("secondValue")
    .isInt({ min: 0 })
    .withMessage("second value must be valid"),
]


export { operationValidator }