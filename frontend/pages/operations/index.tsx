import type { NextPage } from 'next'
import Head from 'next/head'
import Balance from '../../component/balance/balance'
import CalculatorForm from '../../component/calculator-form/calculator-form'

const Records: NextPage = () => {
    return (
        <div className='min-h-full'>
            <Head>
                <title>Arithmetic Operation App - Operation</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <div className='my-9 max-w-md'>
                <Balance />
                <CalculatorForm/>
            </div>
        </div>
    )
}

export default Records
