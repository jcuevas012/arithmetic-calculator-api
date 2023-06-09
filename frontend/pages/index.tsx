import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Balance from '../component/balance'

const LandingPage: NextPage<{ currentUser: any }> = ({ currentUser }) => {
    return (
        <div className='min-h-full'>
            <Head>
                <title>Operation App</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <main>
                <div className='bg-gray-50 h-screen'>
                    <div className='max-w-7xl mx-auto h-screen py-12 px-4 sm:px-6 '>
                        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                            {currentUser && <span className='block'>Welcome {currentUser.email}</span>}
                            <span className='block'>Planing to do some arithmetic operations ?</span>
                            <span className='block text-indigo-600'>Lets dive in.</span>
                        </h2>

                        {currentUser && 
                        <div className="py-5">
                            <Balance/>
                        </div>
                        }
                        {currentUser && <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
                            <div className='inline-flex rounded-md shadow'>
                                <Link href={'/operations'}>
                                    <a className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'>
                                        Create Operation
                                    </a>
                                </Link>
                            </div>
                            <div className='ml-10 inline-flex rounded-md shadow'>
                                 <Link href={'/records'}>
                                    <a className="inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                        View Records
                                    </a>
                                </Link>
                            </div>
                          
                        </div>}


                    </div>
                </div>
            </main>
        </div>
    )
}


export default LandingPage
