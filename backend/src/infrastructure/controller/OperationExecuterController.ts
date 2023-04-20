import { OperationPayload, OperationService } from "../../domain/services/OperationService";
import { IController, IRequest, IResponse } from "../adapters/controller.interface";





export class OperationExecuterController implements IController {
  constructor(
    private service: OperationService
  ) { }

  async handle(req: IRequest): Promise<IResponse> {
    try {
      const payload = req.payload as OperationPayload;
      const userId = req.user.id

      const record = await this.service.addition(userId, payload);

      return {
        payload: record,
        status: 201
      }

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