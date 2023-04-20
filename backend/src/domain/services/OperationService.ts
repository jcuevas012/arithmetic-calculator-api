import { BadRequestError } from "../entities/Error/bad-request-error";
import { Operation, OperationType } from "../entities/Operation";
import { Record } from "../entities/Record";
import { IOperationRepository } from "../repository/IOperationRepository";
import { IUserRepository } from "../repository/IUserRepository";

export interface OperationPayload {
  firstValue: number;
  secondValue: number;
  operationId: string
}


export class OperationService {
  constructor(
    private operationRepository: IOperationRepository,
    private userRepository: IUserRepository,
  ){}

  async addition(userId: string, operationPayload: OperationPayload): Promise<Record>{
      try {
      
        const operation = await this.operationRepository.getOperationById(operationPayload.operationId)

        const userOperation = await this.userRepository.findById(userId)
        const newRecord = new Record(userOperation.getId(), operation)

        const response = this.executeOperation(operation, operationPayload)

        const userBalance = userOperation.getBalance() - operation.getCost()

        newRecord.setAmount(operation.getCost())
        newRecord.setUserBalance(userBalance)
        newRecord.setOperationResponse(response)

        const record = await this.operationRepository.create(newRecord)

        return record;
      } catch (error) {
          console.log('Log:', error.message)
          throw new BadRequestError('Error with addition operation')
      }
  }

  async getOperationList(): Promise<Operation[]> {
    try {

      const operations = await this.operationRepository.findAll()

      return operations
    } catch (error) {
        console.log('Log:', error.message)
        throw new BadRequestError('Error fetching operation list')
    }
  }




  executeOperation(operation: Operation, values: OperationPayload ): number | string {
    const { firstValue, secondValue } = values
    const type = OperationType[operation.getType()] as unknown as OperationType

    switch (type) {
        case OperationType.addition:
          return firstValue + secondValue
        case OperationType.subtraction:
          return firstValue - secondValue
        case OperationType.division:
          return firstValue / secondValue
        case OperationType.multiplication:
          return firstValue * secondValue
        case OperationType.square_root:
          return Math.sqrt(firstValue)
        case OperationType.random_string:
          return 'xsssfs'      
        default:
          break;
      }
  }

}