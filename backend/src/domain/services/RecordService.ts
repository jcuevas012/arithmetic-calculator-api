import { BadRequestError } from "../entities/Error/bad-request-error";
import {  Record } from "../entities/Record";
import { IRecordRepository } from "../repository/IRecordRepository";


interface RecordPaginationResults {
  totalItems: number
  records: Record[]
  totalPages: number
  currentPage:  number
}



export class RecordService {
  constructor(
    private repository: IRecordRepository,
  ){}

  async findAll(filter: any): Promise<RecordPaginationResults> {
      try {

        const {limit, offset} = this.getPaginationParams(filter.page, filter.size)

        const data = await this.repository.findAll({
          limit, 
          offset,
          where: {
            operationId: filter.operationId
          }
        });

        return this.getPaginationData(data, offset, limit)
      } catch (error) {
          console.log('Log:', error)
          console.log('Log:', error.message)
          throw new BadRequestError(`Error fetching records`)
      }
  }



   getPaginationParams(page: string, size: string): { limit: number, offset: number } {
    const limit = size ? +size : 10;
    const offset = page ? +page * limit : 0;
  
    return { limit, offset };
  }


   getPaginationData(data: any, offset: number, limit: number): RecordPaginationResults {
    const totalItems: number = data.count
    const records: Record[] = data.records
    
    const currentPage = offset ? offset : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, records, totalPages, currentPage };
  }
  


}