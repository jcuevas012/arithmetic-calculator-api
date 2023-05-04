import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Balance from '../../component/balance'


const OperationSuccessPage: NextPage<{ currentUser: any }> = ({ currentUser }) => {
    return (
        <div className='min-h-full'>
            <Head>
                <title>Operation Success</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <main>
                <div className='bg-gray-50 h-screen'>
                    <div className='max-w-7xl mx-auto h-screen py-12 px-4 sm:px-6 '>
                        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                            <span className='block text-indigo-600'>Operation Executed Successfully!</span>
                        </h2>

                        <div className="py-5">
                            <Balance/>
                        </div>
                        
                            <div className='inline-flex rounded-md shadow'>
                                <Link href={'/operations'}>
                                    <a className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>
                                        Create Operation
                                    </a>
                                </Link>
                            </div>
                            <div className='ml-10 inline-flex rounded-md shadow'>
                                 <Link href={'/'}>
                                    <a className="inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                        Go Home
                                    </a>
                                </Link>
                            </div>
                    </div>
                 </div>
            </main>
        </div>
    )
}


export default OperationSuccessPage
