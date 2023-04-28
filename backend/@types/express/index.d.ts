export {};

export interface UserPayload {
    id: string;
    email: string;
  }

  declare global {
    namespace Express {
      interface Request {
        auth?: UserPayload;
      }
    }
  }
  