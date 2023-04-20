import { Request, Response } from "express";
import { OperationService } from "../../domain/services/OperationService";

export class OperationController {
  constructor(
    private service: OperationService
  ) { }


  async getOperationList(_req: Request, res: Response) {

    const operations = await this.service.getOperationList()

    return res.status(200).json(operations);
  }
}