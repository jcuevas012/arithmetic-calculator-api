import { Operation } from "../entities/Operation";
import { Record } from "../entities/Record";

export interface IOperationRepository {
    identifier: string

    create(userId: string, operation: Operation): Promise<Record>

  }
  