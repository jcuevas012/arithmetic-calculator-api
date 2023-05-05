import axios from 'axios'

export interface IRandomStrService {
     getValue(firstValue: number, secondValue: number): Promise<string>
}

 export class RandomStrService implements IRandomStrService {

    constructor() {
        const host = process.env.RANDOM_SERVICE_HOST as string
        axios.defaults.baseURL = host;
    }

    async getValue(firstValue = 10, secondValue = 20): Promise<string> {

        try {
            const response = await axios.get(`&/?num=10&col=1&base=10&format=plain&min=${firstValue}&max=${secondValue}`)
            const data = response.data as string
            return data.trim()
        } catch (err) {
            console.log('Log:: Error RandomStrService.getValue ', err?.message)
            return 'DATA AVAILABLE'
        }
    }
}
