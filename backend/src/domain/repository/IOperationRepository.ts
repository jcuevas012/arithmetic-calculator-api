import { Operation } from "../entities/Operation";
import { Record } from "../entities/Record";

export interface IOperationRepository {
    identifier: string

    create(record: Record): Promise<Record>

    getOperationById(id: string): Promise<Operation>
    findAll(): Promise<Operation[]>

  }
  