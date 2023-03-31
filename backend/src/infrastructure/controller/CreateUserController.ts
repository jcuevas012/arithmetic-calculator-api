import { Request, Response } from "express";
import { User } from "../../domain/entities/User/User";
// import { ValidationError } from "../../domain/errors/ValidationError";
import { CreateUserService } from "../../domain/services/CreateUserService";

export class CreateUserController {
  constructor(
    private service: CreateUserService
  ) { }

  async handle(req: Request, res: Response) {
    const { username, password } = req.body;
  
    try {
      const newUser = new User()
      newUser.setUsername(username)
      newUser.setPassword(password)

      const { id } = await this.service.create(newUser)

      return res.status(201).json({ id });
    } catch (err) {
      //
    }
  }
}