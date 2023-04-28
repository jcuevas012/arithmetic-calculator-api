import { Router, Request, Response } from "express";
import { signInValidator } from "../../infrastructure/input-validators/signin-validator";
import { signUpValidator } from "../../infrastructure/input-validators/signup-validator";
import { UserControllerFactory } from "../factories/UserControllerFactory";
import { requireAuth } from "../../infrastructure/middlewares/require-auth";


const userController = UserControllerFactory.make();


const router = Router()

router.post('/sign-up' , signUpValidator(), async (req: Request, res: Response) => userController.signUp(req, res))
router.post('/sign-in' , signInValidator(), async (req: Request, res: Response) => userController.signIn(req, res))
router.get('/current-user', requireAuth(), async (req: Request, res: Response) => userController.getUser(req, res))


export { router as userRoutes  }