export interface IRandomStrService {
    
    getValue(): string
}



export class RandomStrService implements IRandomStrService {

    getValue(): string {
        return (Math.random() + 1).toString(36).substring(7)
    }
}