import CustomError from './custom-error';

export class NotFoundError extends CustomError {
  statusCode = 500;

  constructor(public message: string = 'Not Found') {
    super('Not Found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{message: this.message}];
  }
}
