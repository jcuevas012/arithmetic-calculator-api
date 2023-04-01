import {NextFunction, Request, Response} from 'express';
import { NotAuthorizedError } from '../../domain/entities/Error/not-authorized-error';


export function requireAuth(req: Request, _res: Response, next: NextFunction) {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
}
