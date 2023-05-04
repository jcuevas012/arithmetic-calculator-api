import { BadRequestError } from "../entities/Error/bad-request-error";
import { Record } from "../entities/Record";
import { IRecordRepository } from "../repository/IRecordRepository";


interface RecordPaginationResults {
  totalItems: number
  records: Record[]
  totalPages: number
  currentPage: number
}



export class RecordService {
  constructor(
    private repository: IRecordRepository,
  ) { }

  async findAll(filter: any): Promise<RecordPaginationResults> {
    try {

      const { limit, offset } = this.getPaginationParams(filter.page, filter.size)

      const data = await this.repository.findAll({
        offset,
        limit,
        where: {
          operationId: filter.operationId,
          userId: filter.userId
        }
      });

      return this.getPaginationData(data, limit, filter.page)
    } catch (error) {
      console.log('Log:', error)
      console.log('Log:', error.message)
      throw new BadRequestError(`Error fetching records`)
    }
  }



  getPaginationParams(page: string, size: string): { limit: number, offset: number } {
    const currentPage = page ? +page : 1

    const limit = size ? +size : 10;

    const offset = currentPage > 1 ? (currentPage * limit) - limit : 0;

    return { limit, offset };
  }


  getPaginationData(data: any, limit: number, page: string): RecordPaginationResults {
    const totalItems: number = data.count
    const records: Record[] = data.records

    const currentPage = page ? +page : 1;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, records, totalPages, currentPage };
  }



}