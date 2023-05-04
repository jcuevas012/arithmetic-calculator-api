export interface IRandomStrService {
    
    getValue(firstValue: number, secondValue: number): string
}



export class RandomStrService implements IRandomStrService {

    getValue(firstValue: number, secondValue: number): string {

        // NOTE: third party service will call here
        return (Math.random() + 1).toString(firstValue).substring(secondValue)
    }
}