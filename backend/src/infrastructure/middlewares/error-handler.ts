import { Request, Response} from 'express';
import CustomError from '../../domain/entities/Error/custom-error';


export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({errors: err.serializeErrors()});
  }

  console.error(err);

  return res.status(400).send({
    errors: ['Something went wrong'],
  });
};
