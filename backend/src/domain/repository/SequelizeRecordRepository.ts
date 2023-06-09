import { SequelizeOperation } from "../../infrastructure/database/models/Operation";
import { SequelizeRecord } from "../../infrastructure/database/models/Record";
import { Operation } from "../entities/Operation";
import { Record } from "../entities/Record";
import { IRecordRepository, RecordFilters, RecordResult } from "./IRecordRepository";

export class SequelizeRecordRepository implements IRecordRepository {
  
  identifier = 'sequelize-record-repository';

  

  async findAll(filter: RecordFilters): Promise<RecordResult> {
    try {
      
      const queryParams = filter.where
      const foundRecords = await SequelizeRecord.findAndCountAll({
        offset: filter.offset,
        limit: filter.limit,
        include: {
          model: SequelizeOperation, as: 'operation'
          
        },
        ...(queryParams && {
            where: {
              ...(queryParams?.operationId && { operationId: queryParams.operationId }),
              ...(queryParams?.userId && { userId: queryParams.userId })
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
        
        const {id , cost, type, description} = row.operation.dataValues
        record.setOperation(new Operation(id, type, cost, description))
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
