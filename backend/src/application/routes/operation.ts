import { Request, Response, Router } from "express";
import { OperationControllerFactory } from "../factories/OperationControllerFactory";
import { operationValidator } from "../../infrastructure/input-validators/operation-validator";
import ExpressRoutesAdapter from "../../infrastructure/adapters/expressjs/express-routes.adapter";
import { requireAuth } from "../../infrastructure/middlewares/require-auth";


const operationController = OperationControllerFactory.make();
const operationExecuterController = OperationControllerFactory.buildExecuter()


const router = Router()

router.post('/', operationValidator(), requireAuth(), ExpressRoutesAdapter.adapt(operationExecuterController))

router.get('/', requireAuth(), async (req: Request, res: Response) => operationController.getOperationList(req, res))


export { router as operationRoutes  }