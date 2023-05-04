import type { NextPage } from 'next'
import Head from 'next/head'
import Balance from '../../component/balance'
import CalculatorForm, { OperationPayload } from '../../component/calculator-form'
import useRequest from '../../hooks/use-request';
import { useRouter } from 'next/router';




const Records: NextPage = () => {
    const router = useRouter()

    const [request, errors, isLoading] = useRequest({
        method: 'post',
        url: '/api/operations',
        onSuccess: () => router.push('/'),
    })

    const onChange = async (data: OperationPayload) => {
        // @ts-ignore
        await request(data)
    }

    return (
        <div className='flex'>
            <Head>
                <title>Arithmetic Operation App - Operation</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <div className='py-5 max-w-md'>
                <div className='py-5 '>
                    <Balance />
                </div>
                <CalculatorForm 
                    onChange={onChange} 
                    loading={isLoading}
                    errors={errors}
                />
            </div>
        </div>
    )
}

export default Records