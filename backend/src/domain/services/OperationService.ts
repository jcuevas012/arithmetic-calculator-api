import { BadRequestError } from "../entities/Error/bad-request-error";
import { Operation } from "../entities/Operation";
import { Record } from "../entities/Record";
import { User } from "../entities/User";
import { IOperationRepository } from "../repository/IOperationRepository";



export class OperationService {
  constructor(
    private repository: IOperationRepository,
  ){}

  async addition(user: User, operation: Operation): Promise<Record>{
      try {
        const record = await this.repository.create(user.getId(), operation)
        return record;
      } catch (error) {
          throw new BadRequestError('Error with addition operation')
      }
  }

}