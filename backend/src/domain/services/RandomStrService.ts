export interface IRandomStrService {
    
    getValue(): string
}



export class RandomStrService implements IRandomStrService {

    getValue(): string {

        // NOTE: third party service will call here
        return (Math.random() + 1).toString(36).substring(7)
    }
}