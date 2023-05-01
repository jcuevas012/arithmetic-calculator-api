import { Record } from "../entities/Record";

export interface RecordFilters {
    limit: number
    offset: number
    where?: {
      operationId?: string
    }
}

export interface RecordResult {
  records: Record[]
  count: number
}


export interface IRecordRepository {
    identifier: string


    findAll(filter: RecordFilters): Promise<RecordResult>

  }
  