import { SequelizeOperationRepository } from "../../domain/repository/SequelizeOperationRepository";
import { OperationService } from "../../domain/services/OperationService";
import { OperationController } from "../../infrastructure/controller/OperationController";

export class OperationControllerFactory {

  static make() {
    const repository = new SequelizeOperationRepository();
    const service = new OperationService(repository);
    const controller = new OperationController(service);

    return controller;
  }


  
}