import { NextFunction, Request, Response} from 'express';
import CustomError from '../../domain/entities/Error/custom-error';


export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send({
      errors: ['Not Authorize'],
    });
  }

  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({errors: err.serializeErrors()});
  }

  return res.status(400).send({
    errors: ['Something went wrong'],
  });
};
