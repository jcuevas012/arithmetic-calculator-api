import { Router, Request, Response } from "express";
import { signInValidator } from "../../infrastructure/input-validators/signin-validator";
import { signUpValidator } from "../../infrastructure/input-validators/signup-validator";
import { UserControllerFactory } from "../factories/UserControllerFactory";
import { requireAuth } from "../../infrastructure/middlewares/require-auth";
import { requestValidator } from "../../infrastructure/middlewares/request-validator";


const userController = UserControllerFactory.make();


const router = Router()

router.post('/sign-up' , [...signUpValidator()], requestValidator,  async (req: Request, res: Response) => userController.signUp(req, res))
router.post('/sign-in' , [...signInValidator()], requestValidator, async (req: Request, res: Response) => userController.signIn(req, res))
router.get('/current-user', requireAuth(), async (req: Request, res: Response) => userController.getUser(req, res))
router.get('/current-balance', requireAuth(), async (req: Request, res: Response) => userController.getCurrentBalance(req, res))


export { router as userRoutes  }