import { User } from "../entities/User/User";

export interface IUserRepository {
    create(user: User): Promise<{ id: string }>
    update(id:string , user: User): Promise<{ id: string }>
    delete(id: string): Promise<{ id: string }>
    findById(id: string): Promise<User>

  }
  