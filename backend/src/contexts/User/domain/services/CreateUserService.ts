// import { AdminUser } from "../entities/User/AdminUser";
// import { AuthorUser } from "../entities/User/AuthorUser";
import {  User } from "../entities/User/User";
// import { ValidationError } from "../errors/ValidationError";

export interface CreateUserRepository {
  create(user: User): Promise<{ id: number }>
}

export class CreateUserService {
  constructor(
    private repository: CreateUserRepository
  ){}

  async create(email: string, password: string) {
    const user = this.getUserInstance(email, password);

    const { id } = await this.repository.create(user);

    return { id }
  }

  private getUserInstance(username: string, password: string): User {
    return  new User(username, password, null)
  }
}