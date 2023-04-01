import * as jwt from 'jsonwebtoken';


export class JwtService {
    
   jwtKey: string;
   
    constructor(jwtKey?: string) {
        this.jwtKey = jwtKey || process.env.JWT_KEY;
    }
    
    generateToken(user: {id: string; email: string}) {
    return jwt.sign(user, this.jwtKey);
    }

    verify(token: string) {
    return jwt.verify(token, this.jwtKey);
    }
}
