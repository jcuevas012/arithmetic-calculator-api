import { SequelizeOperation } from "../../infrastructure/database/models/Operation";
import { SequelizeRecord } from "../../infrastructure/database/models/Record";
import { Operation, OperationType } from "../entities/Operation";
import { Record } from "../entities/Record";
import { IRecordRepository, RecordFilters, RecordResult } from "./IRecordRepository";

export class SequelizeRecordRepository implements IRecordRepository {
  
  identifier = 'sequelize-record-repository';

  

  async findAll(filter: RecordFilters): Promise<RecordResult> {
    try {
      
      const operationId = filter?.where?.operationId

      const foundRecords = await SequelizeRecord.findAndCountAll({
        limit: filter.limit,
        offset: filter.offset,
        include: {
          model: SequelizeOperation, as: 'operation'
          
        },
        ...(operationId && {
            where: {
              operationId
            } 
         })
      });

      const records = foundRecords.rows.map((row) => {
        const record = new Record()
        record.setId(row.id)
        record.setUserBalance(row.userBalance)
        record.setAmount(row.amount)
        record.setDate(row.createdAt)
        record.setOperationResponse(row.operationResponse)
        record.setUserBalance(row.userBalance)
        
        const {id , cost, type} = row.operation.dataValues
        record.setOperation(new Operation(id, type, cost))
        return record;
      })

      return {
        count: foundRecords.count,
        records
      }

    } catch (error) {
      console.log('Log:', error)
      console.log('Log:', error.message)
      throw new Error(this.createErrorMsg('Deleting User', error.message))
    }
  }




  createErrorMsg(label: string, msg: string) {
    return `${this.identifier}::Something went wrong ${label}::${msg}`
  }
}
