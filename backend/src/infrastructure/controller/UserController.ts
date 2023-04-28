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

      const { id } = await this.service.create(newUser)

      return res.status(201).json({ id });
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