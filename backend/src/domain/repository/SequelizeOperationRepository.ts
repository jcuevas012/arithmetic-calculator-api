import { SequelizeOperation } from "../../infrastructure/database/models/Operation";
import { SequelizeRecord } from "../../infrastructure/database/models/Record";
import { SequelizeUser } from "../../infrastructure/database/models/User";
import { Operation } from "../entities/Operation";
import { Record } from "../entities/Record";
import { IOperationRepository } from "./IOperationRepository";

export class SequelizeOperationRepository implements IOperationRepository {
  identifier = 'sequelize-operation-repository';
  async create(record: Record): Promise<Record> {
      try {

        const operation = record.getOperation()

        const createdRecord = await SequelizeRecord.create({
          userId: record.getUserId(),
          operationId: operation.getId(),
          operationResponse: record.getOperationResponse(),
          userBalance: record.getUserBalance(),
          amount: record.getAmount()
        });
        
        await SequelizeUser.update({
          balance: record.getUserBalance()
        }, {
          where: {
            id: record.getUserId()
          }
        })


        const newRecord = new Record(record.getUserId(), operation)
        newRecord.setId(createdRecord.id)
        newRecord.setAmount(createdRecord.amount)
        newRecord.setOperation(operation)
        newRecord.setUserId(createdRecord.userId)
        newRecord.setUserBalance(createdRecord.userBalance)
        newRecord.setDate(createdRecord.createdAt)
        newRecord.setOperationResponse(createdRecord.operationResponse)

      
        return newRecord;
      } catch (err) {
        console.log('Log:', err)
        console.log('Log:', err.message)
        throw new Error(this.createErrorMsg('Saving record operation', err.message))
      }
  }
  

  async findAll(): Promise<Operation[]> {
    try {
        const operationFounds = await SequelizeOperation.findAll()

        const operationList = operationFounds.map(operation => new Operation(operation.id, operation.type, operation.cost, operation.description))

        return operationList
    } catch (err) {
      throw new Error(this.createErrorMsg('query operation by id ', err.message))
    }
}

  
  async getOperationById(id: string): Promise<Operation> {
      try {
          const found = await SequelizeOperation.findByPk(id)

          const foundOperation = new Operation(found.id, found.type, found.cost, found.description)

          return foundOperation
      } catch (err) {
        throw new Error(this.createErrorMsg('query operation by id ', err.message))
      }
  }
  

  
  createErrorMsg(label: string, msg: string) {
    return `${this.identifier}::Something went wrong ${label}::${msg}`
  }
}