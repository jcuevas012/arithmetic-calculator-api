import { User } from "../entities/User";

export interface IUserRepository {
    identifier: string

    create(user: User): Promise<User>
    update(id:string , user: User): Promise<{ id: string }>
    delete(id: string): Promise<{ id: string }>
    findById(id: string): Promise<User>
    createErrorMsg(label: string, msg: string): string;
    findByEmail(email: string): Promise<User>

  }
  