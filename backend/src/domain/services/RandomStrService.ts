import axios from 'axios'

export interface IRandomStrService {
    getValue(firstValue: number, secondValue: number): Promise<string>
}

export class RandomStrService implements IRandomStrService {

    async getValue(firstValue = 10, secondValue = 20): Promise<string> {

        try {
            const host = process.env.RANDOM_SERVICE_HOST as string

            const response = await axios.get(`${host}&min=${firstValue}&max=${secondValue}`)

            const data = response.data as string
            return data.trim()
        } catch (err) {
            console.log('Log:: Error RandomStrService.getValue ', err?.message)
            return 'DATA AVAILABLE'
        }
    }
}