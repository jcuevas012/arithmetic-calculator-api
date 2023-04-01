import { randomBytes, scrypt } from 'crypto'
import { promisify } from 'util'

const scryptAsync = promisify(scrypt)

export default class HasPassPasswordService {

     async toHash(password: string): Promise<string> {
        const salt = randomBytes(8).toString('hex')
        const buff = (await scryptAsync(password, salt, 64)) as Buffer

        return `${buff.toString('hex')}.${salt}`
    }

    async compare(password: string, suppliedPassword: string): Promise<boolean> {
        const [hashedPassword, salt] = password.split('.')
        const buff = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer
        return hashedPassword === buff.toString('hex')
    }
}