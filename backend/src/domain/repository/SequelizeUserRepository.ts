import { SequelizeUser } from "../../infrastructure/database/models/User";
import { User, UserStatus } from "../entities/User/User";
import { IUserRepository } from "../repository/IUserRepository";

export class SequelizeUserRepository implements IUserRepository {
  async create(user: User): Promise<{ id: string; }> {

    try {
      const created = await SequelizeUser.create({
        username: user.getUserName(),
        password: user.getPassword(),
        status: user.getStatus()
      });

      return {
        id: created.id
      }
    } catch (error) {
      
      throw Error(`Something went wrong saving database ${error.message}`)
    }

  }

  async update(id: string, user: User): Promise<{ id: string }> {
    const updated = await SequelizeUser.update({
      ...user
    }, {
      where: {
        id
      }
    })

    return { id: user.getId() }
  }

  async delete(id: string): Promise<{ id: string; }> {
    const deleted = await SequelizeUser.destroy({
      where: {
        id: 1
      }
    });

    return { id }
  }

  async findById(id: string): Promise<User> {
    const found = await SequelizeUser.findOne({ where: { id } })

    const user = new User()
    user.setId(found.id)
    user.setPassword(found.password)
    user.setUsername(found.username)
    user.setStatus(found.status as UserStatus)

    return user
  }
}