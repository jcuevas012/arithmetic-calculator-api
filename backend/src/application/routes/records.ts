import { Request, Response, Router } from "express";
import { requireAuth } from "../../infrastructure/middlewares/require-auth";
import { RecordControllerFactory } from "../factories/RecordControllerFactory";


const recordController = RecordControllerFactory.make();


const router = Router()


router.get('/', requireAuth(), async (req: Request, res: Response) => recordController.findAll(req, res))


export { router as recordRoutes  }