import { Request, Response } from "express";
// import { ValidationError } from "../../domain/errors/ValidationError";
import { CreateUserService } from "../../domain/services/CreateUserService";

export class CreateUserController {
  constructor(
    private service: CreateUserService
  ) { }

  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const { id } = await this.service.create(email, password)

      return res.status(201).json({ id });
    } catch (err) {
      //
    }
  }
}