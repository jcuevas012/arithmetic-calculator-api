import Image from 'next/image'
import Link from 'next/link'

interface CurrentUserProps {
    currentUser: { email: string }
}

const Header: React.FC<CurrentUserProps> = ({ currentUser }) => {
    return (
            <div className="flex justify-between nav-container">
                    <div>
                        <Link href="/">
                            <Image
                                width={20}
                                height={20}
                                className='h-8 w-auto sm:h-10'
                                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                                alt='Home'
                            />
                        </Link>

                    </div>
                    <div>
                        {!currentUser ? (
                            <>
                                <Link href={'/auth/signin'}>
                                    <a className='sign-link whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                                        Sign in 
                                    </a>
                                </Link>
                                <Link href={'/auth/signup'}>
                                    <a
                                        className=' ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                                    >
                                        Sign up 
                                    </a>
                                </Link>
                            </>
                        ) : (
                                <Link href='/auth/signout'>
                                    <a
                                       className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                                    >
                                        {' '} Sign out
                                    </a>
                                </Link>)
                        }
                    </div>
            </div>
    )


                        
                            
    
}

export default Header
