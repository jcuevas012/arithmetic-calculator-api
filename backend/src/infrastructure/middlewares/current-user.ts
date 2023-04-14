import {NextFunction, Request, Response} from 'express';
import { UserPayload } from '../../../@types/express';
import { BadRequestError } from '../../domain/entities/Error/bad-request-error';
import { JwtService } from '../../domain/services/JwtService';


export function currentUser(req: Request, _res: Response, next: NextFunction) {
  const jwt = req?.session?.jwt;

  if (!jwt) {
    next();
  }

  try {
    const jwtService = new JwtService()
    const payload = jwtService.verify(jwt) as UserPayload;
    req.currentUser = payload ;
  } catch (error) {
    throw new BadRequestError('Error setting current user');
  }

  next();
}
