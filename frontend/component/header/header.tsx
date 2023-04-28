import Image from 'next/image'
import Link from 'next/link'

interface CurrentUserProps {
    currentUser: { email: string }
}

const Header: React.FC<CurrentUserProps> = ({ currentUser }) => {
    console.log('currentUser ---->>>', currentUser)
    return (
        <div className='relative bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
                    <div className='flex justify-start lg:w-0 lg:flex-1'>
                        <Link href={'/'}>
                            <Image
                                width={20}
                                height={20}
                                className='h-8 w-auto sm:h-10'
                                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                                alt=''
                            />
                        </Link>
                    </div>

                    <div className='md:flex  space-x-4 items-center justify-end md:flex-1 lg:w-0'>
                        {!currentUser ? (
                            <>
                                <Link href={'/auth/signin'}>
                                    <a className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                                        {' '}
                                        Sign in{' '}
                                    </a>
                                </Link>
                                <Link href={'/auth/signup'}>
                                    <a
                                        className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                                    >
                                        {' '}
                                        Sign up{' '}
                                    </a>
                                </Link>
                            </>
                        ) : (
                                <Link href='/auth/signout'>
                                    <a
                                        href='#'
                                        className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
                                    >
                                        Sign out{' '}
                                    </a>
                                </Link>
                            
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
