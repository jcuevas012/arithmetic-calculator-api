import { BadRequestError } from "../entities/Error/bad-request-error";
import { Operation, OperationType } from "../entities/Operation";
import { Record } from "../entities/Record";
import { IOperationRepository } from "../repository/IOperationRepository";
import { IUserRepository } from "../repository/IUserRepository";
import { IRandomStrService } from "./RandomStrService";

export interface OperationPayload {
  firstValue: number;
  secondValue: number;
  operationId: string
}


export class OperationService {
  constructor(
    private operationRepository: IOperationRepository,
    private userRepository: IUserRepository,
    private randomStrService?: IRandomStrService
  ) { }

  async addition(userId: string, operationPayload: OperationPayload): Promise<Record> {
    const operation = await this.operationRepository.getOperationById(operationPayload.operationId)

    const userInfo = await this.userRepository.findById(userId)

    if (operation.getCost() > userInfo.getBalance()) {
      throw new BadRequestError("Operation not allow, insufficient balance")
    }

    try {
      const newRecord = new Record(userInfo.getId(), operation)

      const response = await this.executeOperation(operation.getType().toString(), operationPayload)

      const userBalance = userInfo.getBalance() - operation.getCost()


      newRecord.setAmount(operation.getCost())
      newRecord.setUserBalance(userBalance)
      newRecord.setOperationResponse(response)

      const record = await this.operationRepository.create(newRecord)

      return record;
    } catch (error) {
      console.log('Log:::', error)
      console.log('Log:::', error.message)
      throw new Error('Error with addition operation')
    }
  }

  async getOperationList(): Promise<Operation[]> {
    try {

      const operations = await this.operationRepository.findAll()

      return operations
    } catch (error) {
      console.log('Log:', error)
      console.log('Log:', error.message)
      throw new BadRequestError('Error fetching operation list')
    }
  }




  async executeOperation(type: string, values: OperationPayload): Promise<string> {
    const { firstValue, secondValue } = values

    const getResult = async () => {
      switch (type) {
        case 'addition':
          return firstValue + secondValue
        case 'subtraction':
          return firstValue - secondValue
        case 'division':
          return firstValue / secondValue
        case 'multiplication':
          return firstValue * secondValue
        case 'square_root':
          return Math.sqrt(firstValue)
        case 'random_string':
          return this.randomStrService.getValue(firstValue, secondValue)
        default:
          break;
      }
    }

    const result = await getResult()

    return result && result.toString()
  }

}