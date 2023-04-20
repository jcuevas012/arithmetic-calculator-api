import { SequelizeOperationRepository } from "../../domain/repository/SequelizeOperationRepository";
import { SequelizeUserRepository } from "../../domain/repository/SequelizeUserRepository";
import { OperationService } from "../../domain/services/OperationService";
import { OperationController } from "../../infrastructure/controller/OperationController";
import { OperationExecuterController } from "../../infrastructure/controller/OperationExecuterController";

export class OperationControllerFactory {

  static buildExecuter() {
    const operationRepository = new SequelizeOperationRepository();
    const userRepository = new SequelizeUserRepository();
    const service = new OperationService(operationRepository, userRepository);
    const controller = new OperationExecuterController(service);

    return controller;
  }

  static make() {
    const operationRepository = new SequelizeOperationRepository();
    const userRepository = new SequelizeUserRepository();
    const service = new OperationService(operationRepository, userRepository);
    const controller = new OperationController(service);

    return controller;
  }


  
}