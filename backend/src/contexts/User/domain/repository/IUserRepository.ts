import { User } from "../entities/User/User";

export interface UserRepository {
    create(user: User): Promise<{ id: string }>
    update(user: User): Promise<User>
    delete(id: string): Promise<{ id: string }>
    findById(id: string): Promise<User>

  }
  