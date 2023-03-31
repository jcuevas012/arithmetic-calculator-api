import {  User } from "../entities/User/User";
import { IUserRepository } from "../repository/IUserRepository";



export class CreateUserService {
  constructor(
    private repository: IUserRepository
  ){}

  async create(user: User) {
    const { id } = await this.repository.create(user);
    return { id }
  }


  async update(_id: string , user: User) {
    
    const { id } = await this.repository.update(_id, user);

    return { id }
  }

}