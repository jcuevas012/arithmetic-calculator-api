import { expressjwt as jwt  } from "express-jwt";
import { Algorithm } from "jsonwebtoken";

const secret = process.env.JWT_KEY
const algorithm = process.env.JWT_ALGO as Algorithm

export function requireAuth() {
    return jwt({ secret, algorithms: [algorithm] })
}
