import { SequelizeUserRepository } from "../../domain/repository/SequelizeUserRepository";
import { UserService } from "../../domain/services/UserService";
import HasPassPasswordService from "../../domain/services/HashPasswordService";
import { JwtService } from "../../domain/services/JwtService";
import { UserController } from "../../infrastructure/controller/UserController";

export class UserControllerFactory {

  static make() {
    const repository = new SequelizeUserRepository();
    const service = new UserService(repository, new HasPassPasswordService(), new JwtService());
    const controller = new UserController(service);

    return controller;
  }


  
}