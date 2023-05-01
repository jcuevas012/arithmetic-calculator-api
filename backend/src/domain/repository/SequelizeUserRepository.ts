import { SequelizeUser } from "../../infrastructure/database/models/User";
import { User, UserStatus } from "../entities/User";
import { IUserRepository } from "../repository/IUserRepository";

export class SequelizeUserRepository implements IUserRepository {
  
  identifier = 'sequelize-user-repository';

  async create(user: User): Promise<User> {

    try {
      const created = await SequelizeUser.create({
        username: user.getUserName(),
        password: user.getPassword(),
        status: user.getStatus(),
        balance: 5000
      });

      const newUser = new User()
      newUser.setId(created.id)
      newUser.setUsername(created.username)
      newUser.setPassword(created.password)
      newUser.setStatus(created.status as UserStatus)

      return newUser
    } catch (error) {
      throw new Error(this.createErrorMsg('Saving User', error.message))
    }

  }

  async update(id: string, user: User): Promise<{ id: string }> {
    try {
      await SequelizeUser.update({
        ...user
      }, {
        where: {
          id
        }
      })
  
      return { id: user.getId() } 
    } catch (error) {
      console.log(error.message)
      throw new Error(this.createErrorMsg('Updating User', error.message))
    }
     
  }

  async delete(id: string): Promise<{ id: string; }> {
    try {
      
      await SequelizeUser.destroy({
        where: {
          id: 1
        }
      });
  
      return { id }

    } catch (error) {
      throw new Error(this.createErrorMsg('Deleting User', error.message))
    }
  }


  async findByEmail(email: string): Promise<User> {
    try {
      const found = await SequelizeUser.findOne({ where: { username: email } })

      const user = new User()
      user.setId(found.id)
      user.setUsername(found.username)
      user.setPassword(found.password)
      user.setStatus(found.status as UserStatus)

      return user  
    } catch (error) {
      throw new Error(this.createErrorMsg('Find By username/email User', error.message))
              
    }
  }

  async findById(id: string): Promise<User> {
    try {
      const found = await SequelizeUser.findOne({ where: { id } })

      const user = new User()
      user.setId(found.id)
      user.setUsername(found.username)
      user.setBalance(found.balance)
      user.setStatus(found.status as UserStatus)

      return user  
    } catch (error) {
      throw new Error(this.createErrorMsg('Find By Id User', error.message))
              
    }
  }


  createErrorMsg(label: string, msg: string) {
    return `${this.identifier}::Something went wrong ${label}::${msg}`
  }
}