import { NextPage } from "next"
import Link from "next/link"

const NotAuthorized: NextPage = () => {
    return (<div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
            <h1 className="font-black text-gray-200 text-9xl">401</h1>

            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Uh-oh!
            </p>

            <p className="mt-4 text-gray-500">We can't access this page.</p>
            <Link href={'/'}>
                <a className="inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Go Home
                </a>
            </Link>
        </div>
    </div>)
}


export default NotAuthorized