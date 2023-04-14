import { SequelizeOperation } from "../../infrastructure/database/models/Operation";
import { Operation } from "../entities/Operation";
import { Record } from "../entities/Record";
import { IOperationRepository } from "./IOperationRepository";

export class SequelizeOperationRepository implements IOperationRepository {
  identifier = 'sequelize-operation-repository';
  async create(userId: string, operation: Operation): Promise<Record> {
      try {
         const createdOperation = await SequelizeOperation.create({
          type: operation.getType(),
          cost: operation.getCost(),
        });
        const newOperation = new Operation(createdOperation.id, createdOperation.type, createdOperation.cost)
        const newRecord = new Record(userId, newOperation)
      
        return newRecord;
      } catch (err) {
        console.log(err)
        throw new Error(this.createErrorMsg('Saving record operation', err.message))
      }
  }
  
  

  
  createErrorMsg(label: string, msg: string) {
    return `${this.identifier}::Something went wrong ${label}::${msg}`
  }
}