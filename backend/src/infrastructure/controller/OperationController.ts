import { Operation } from "../../domain/entities/Operation";
import { User } from "../../domain/entities/User";
import { OperationService } from "../../domain/services/OperationService";
import { IController, IRequest, IResponse } from "../adapters/controller.interface";


interface OperationPayload {
  operation: Operation,
  user: User
}


export class OperationController implements IController {
  constructor(
    private service: OperationService
  ) { }

  async handle(req: IRequest): Promise<IResponse> {
    const operationPayload = req.payload as OperationPayload;
    try {
      await this.service.addition(operationPayload.user, operationPayload.operation);

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