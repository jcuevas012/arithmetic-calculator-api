import { BadRequestError } from "../entities/Error/bad-request-error";
import { Operation } from "../entities/Operation";
import { IOperationRepository } from "../repository/IOperationRepository";



export class OperationService {
  constructor(
    private repository: IOperationRepository,
  ){}

  async addition(user: User, operation: Operation) {
      try {
        
        
      } catch (error) {
          throw new BadRequestError('Error with addition operation')
      }
  }

}