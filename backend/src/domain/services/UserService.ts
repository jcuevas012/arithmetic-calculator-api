import { BadRequestError } from "../entities/Error/bad-request-error";
import {  User } from "../entities/User";
import { IUserRepository } from "../repository/IUserRepository";
import HasPassPasswordService from "./HashPasswordService";
import { JwtService } from "./JwtService";



export class UserService {
  constructor(
    private repository: IUserRepository,
    private passwordHashService: HasPassPasswordService,
    private jwtService?: JwtService
  ){}

  async create(user: User): Promise<{ id: string }> {
      try {
        const hashPassword = await this.passwordHashService.toHash(user.getPassword())
        user.setPassword(hashPassword)

        const { id } = await this.repository.create(user);

        return { id }  
        
      } catch (error) {
         console.log('Log:', error.message)
          throw new BadRequestError(`Error saving user`, )
      }
  }


  async update(_id: string , user: User): Promise<{ id: string; }> {
    
    const { id } = await this.repository.update(_id, user);

    return { id }
  }


  async authenticate(email: string, password: string): Promise<string> {

    try {
      const foundUser = await this.repository.findByEmail(email);

    if (!foundUser) {
      throw new BadRequestError('Invalid credentials')
    }

    const validPassword = this.passwordHashService.compare(foundUser.getPassword(), password)

    if (!validPassword) {
        throw new BadRequestError('Invalid credentials')
    }

    const jwt = this.jwtService.generateToken({
      id: foundUser.getId(),
      email: foundUser.getUserName(),
    })

    return jwt  
    } catch (error) {
      console.log(error)
      throw new BadRequestError('Error authenticate user')
    }
    
  }


}