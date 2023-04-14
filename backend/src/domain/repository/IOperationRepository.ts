import { Operation } from "../entities/Operation";

export interface IOperationRepository {
    identifier: string

    create(operation: Operation): Promise<Operation>

  }
  