import { SequelizeUserRepository } from "../../domain/repository/SequelizeUserRepository";
import { CreateUserService } from "../../domain/services/CreateUserService";
import HasPassPasswordService from "../../domain/services/HashPasswordService";
import { CreateUserController } from "../../infrastructure/controller/CreateUserController";

export class UserControllerFactory {

  static make() {
    const repository = new SequelizeUserRepository();
    const service = new CreateUserService(repository, new HasPassPasswordService());
    const controller = new CreateUserController(service);

    return controller;
  }
}