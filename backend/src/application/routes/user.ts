import { Router, Request, Response } from "express";
import { UserControllerFactory } from "../factories/UserControllerFactory";


const createUserController = UserControllerFactory.make();

const router = Router()

router.post('/signup' , async (req: Request, res: Response) => createUserController.handle(req, res))


export { router as userRoutes  }