import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import OperationTypeDropDown from '../../component/operation-dropdown'

interface RecordResultSet {
    totalItems: number
    records: Record[]
    totalPages: number
    currentPage: number

}
interface Record {
    operation: any
    id: string
    userBalance: string
    amount: string
    date: string
    operationResponse: string
}


const Pagination = () => {
    return (
    <ol className="flex justify-center gap-1 text-xs font-medium">
        <li>
            <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
                <span className="sr-only">Prev Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </a>
        </li>

        <li>
            <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
                1
            </a>
        </li>

        <li
            className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
        >
            2
        </li>

        <li>
            <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
                3
            </a>
        </li>

        <li>
            <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
                4
            </a>
        </li>

        <li>
            <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
                <span className="sr-only">Next Page</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </a>
        </li>
    </ol>

    )
}

const RecordItem: React.FC<{ record: Record }> = ({ record }) => {
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <p>{record.operation?.description}</p>
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {record.operation?.cost}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {record.userBalance}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {record.operationResponse}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {record.date}
            </td>
        </tr>
    )
}


const Records: NextPage = () => {

    const [result, setResult] = useState<RecordResultSet>()

    const fetchData = async () => {
        try {
            const { data } = await axios.get('/api/records')
            setResult(data)
        } catch (error) {
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const records = result?.records || []

    return (
        <div className='min-h-full'>
            <Head>
                <title>Arithmetic Operation App - Records</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <main>
                <OperationTypeDropDown onChange={() => {}}/>
                <div className="my-5 overflow-x-auto rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Operation
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Cost
                                </th>

                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    User Balance
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Operation Result
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Date
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {records.length ?
                                records.map((record) => <RecordItem key={record.id} record={record} />)
                                :
                                <tr>
                                    NO RECORDS
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <Pagination/>
            </main>
        </div>
    )
}

export default Records
