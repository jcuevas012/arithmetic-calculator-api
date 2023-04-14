import { Operation, OperationType } from "../../domain/entities/Operation";
import { User } from "../../domain/entities/User";
import { OperationService } from "../../domain/services/OperationService";
import { IController, IRequest, IResponse } from "../adapters/controller.interface";


interface OperationPayload {
  type: OperationType,
  cost: number
}


export class OperationController implements IController {
  constructor(
    private service: OperationService
  ) { }

  async handle(req: IRequest): Promise<IResponse> {
    try {
      const payload = req.payload as OperationPayload;
      const user = new User()
      user.setId(req.user.id)
      
      await this.service.addition(user, new Operation(null, payload.type, payload.cost));

    } catch (err) {
      return {
        status: 500,
        payload: {
          error: ""
        }
      }
    }
  }
}