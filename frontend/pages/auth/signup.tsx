import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useRequest from '../../hooks/use-request'

const SignUpPage: NextPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [request, errors] = useRequest({
        method: 'post',
        url: '/api/auth/sign-up',
        body: { username: email, password },
        onSuccess: () => router.push('/'),
    })

    const onSubmit = async (e: any) => {
        e.preventDefault()
        // @ts-ignore
        await request()
    }
    return (
        <div>
            <Head>
                <title>Sign up Arithmetic App</title>
            </Head>

            <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md w-full space-y-8'>
                    <div>
                        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                            Sign up to your account
                        </h2>
                    </div>
                    <form className='mt-8 space-y-6' onSubmit={(e) => onSubmit(e)} >
                        <input type='hidden' name='remember' value='true' />
                        <div className='rounded-md shadow-sm -space-y-px'>
                            <div>
                                <label htmlFor='email-address' className='sr-only'>
                                    Email address
                                </label>
                                <input
                                    id='email-address'
                                    name='email'
                                    type='email'
                                    autoComplete='email'
                                    required
                                    value={email}
                                    onChange={({ target: { value } }) => setEmail(value)}
                                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                    placeholder='Email address'
                                />
                            </div>
                            <div>
                                <label htmlFor='password' className='sr-only'>
                                    Password
                                </label>
                                <input
                                    id='password'
                                    name='password'
                                    type='password'
                                    value={password}
                                    onChange={({ target: { value } }) => setPassword(value)}
                                    autoComplete='current-password'
                                    required
                                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                    placeholder='Password'
                                />
                            </div>
                        </div>

                        <div className='text-sm text-red-800'>{errors}</div>

                        <div>
                            <button
                                type='submit'
                                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
