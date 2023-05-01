import { Request, Response } from "express";
import { User } from "../../domain/entities/User";
import { UserService } from "../../domain/services/UserService";

export class UserController {
  constructor(
    private service: UserService
  ) { }

  async signUp(req: Request, res: Response) {
    const { username, password } = req.body;
  
      
      const newUser = new User()
      newUser.setUsername(username)
      newUser.setPassword(password)

      const createdUser = await this.service.create(newUser)

      const jwtToken = await this.service.authenticate(createdUser.getUserName(), createdUser.getPassword())

      return res.status(201).json({ token: jwtToken });
  }


  async signIn(req: Request, res: Response) {
    const { username, password } = req.body;
  
      const jwtToken = await this.service.authenticate(username, password)

      return res.status(200).json({ token: jwtToken });
  }

  async getUser(req: Request, res: Response) {
    return res.status(200).send({ currentUser: req.auth  })
  }
}