import { Operation } from "../entities/Operation";
import { IOperationRepository } from "./IOperationRepository";

export class SequelizeOperationRepository implements IOperationRepository {
 
  create(operation: Operation): Promise<Operation> {
    throw new Error("Method not implemented.");
  }
  
  identifier = 'sequelize-operation-repository';

  
  createErrorMsg(label: string, msg: string) {
    return `${this.identifier}::Something went wrong ${label}::${msg}`
  }
}