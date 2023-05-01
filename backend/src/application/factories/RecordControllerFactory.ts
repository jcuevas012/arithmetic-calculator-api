import { SequelizeRecordRepository } from "../../domain/repository/SequelizeRecordRepository";
import { RecordService } from "../../domain/services/RecordService";
import { RecordController } from "../../infrastructure/controller/RecordController";

export class RecordControllerFactory {

  static make() {
    const repository = new SequelizeRecordRepository();
    const service = new RecordService(repository);
    const controller = new RecordController(service);

    return controller;
  }


  
}