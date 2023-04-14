import { body } from "express-validator"
import { OperationType } from "../../domain/entities/Operation"



const operationValidator = () => [
  body("userId")
  .isUUID()
  .withMessage("User id must be valid"),
  body("type")
    .trim()
    .isIn([OperationType])
    .withMessage("Operation type must be valid"),
]


export { operationValidator }