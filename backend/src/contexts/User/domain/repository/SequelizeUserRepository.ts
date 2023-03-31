import { SequelizeUser } from "../../infrastructure/database/models/User";
import { User } from "../entities/User/User";
import { CreateUserRepository } from "../services/CreateUserService";

export class SequelizeUserRepository implements CreateUserRepository {
  async create(user: User): Promise<{ id: number; }> {
    const created = await SequelizeUser.create({
      username: user.getUserName(),
      password: user.getPassword(),
    });

    return {
      id: created.id
    }
  }
}