import { Router, Request, Response } from "express";
import { signInValidator } from "../../infrastructure/input-validators/signin-validator";
import { signUpValidator } from "../../infrastructure/input-validators/signup-validator";
import { UserControllerFactory } from "../factories/UserControllerFactory";


const createUserController = UserControllerFactory.make();

const router = Router()

router.post('/signup' , signUpValidator(), async (req: Request, res: Response) => createUserController.handle(req, res))
router.post('/signin' , signInValidator(), async (req: Request, res: Response) => createUserController.handle(req, res))


export { router as userRoutes  }