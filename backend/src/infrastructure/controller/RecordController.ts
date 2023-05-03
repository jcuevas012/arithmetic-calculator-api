import { Request, Response } from "express";
import { RecordService } from "../../domain/services/RecordService";

export class RecordController {
  constructor(
    private service: RecordService
  ) { }

  async findAll(req: Request, res: Response) {
    const { size, page, operationId } = req.query;
    const userId = req.auth.id

      const recordResults = await this.service.findAll(
        {
          size,
          page,
          operationId, 
          userId
        })

      return res.status(200).json(recordResults);
  }


  
}