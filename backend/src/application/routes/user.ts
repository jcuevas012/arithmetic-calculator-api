import { Router, Request, Response } from "express";
import { signInValidator } from "../../infrastructure/input-validators/signin-validator";
import { signUpValidator } from "../../infrastructure/input-validators/signup-validator";
import { UserControllerFactory } from "../factories/UserControllerFactory";


const userController = UserControllerFactory.make();


const router = Router()

router.post('/signup' , signUpValidator(), async (req: Request, res: Response) => userController.signUp(req, res))
router.post('/signin' , signInValidator(), async (req: Request, res: Response) => userController.signIn(req, res))


export { router as userRoutes  }