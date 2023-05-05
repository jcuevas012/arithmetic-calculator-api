import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import OperationTypeDropDown from '../../component/operation-dropdown'
import Table, { RecordResultSet } from '../../component/table'
import { withAuth } from '../../utils/with-auth'

const initialValues = {
    size: 10,
    page: 1,
    operationId: ''
}

interface RecordFilter {
    size: number
    page: number
    operationId: string
}

const Records: NextPage = () => {

    const [result, setResult] = useState<RecordResultSet>({
        currentPage: 0,
        totalItems: 0,
        totalPages: 0,
        records: []
    })

    const [filter, setFilter] = useState<RecordFilter>(initialValues)


    const onClearFilter = () => {
        setFilter(initialValues)
        fetchData()
    }

    const fetchData = async (filter?: RecordFilter) => {
        try {
            let url = '/api/records?'

            if (filter?.operationId) {
                url = url.concat(`operationId=${filter.operationId}&`)
            }

            if (filter?.size) {
                url = url.concat(`size=${filter.size}&`)
            }

            if (filter?.page) {
                url = url.concat(`page=${filter.page}&`)
            }

            const { data } = await axios.get(url)
            setResult(data)
        } catch (error) {
        }
    }

    const onOperationTypeChange = async (operationId: string) => {
        if (operationId) {
            setFilter({ ...filter, operationId })
            fetchData(filter)
        }
    }

    const onPageSelect = async (page: number) => {
        if (page) {
            setFilter({ ...filter, page })
            fetchData(filter)

        }
    }

    const onSizeSelect = async (size: number) => {
        if (size) {
            setFilter({ ...filter, size })
            fetchData(filter)

        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='min-h-full'>
            <Head>
                <title>Arithmetic Operation App - Records</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <main>
                <div className="py-6 flex justify-between nav-container">
                    <OperationTypeDropDown onChange={onOperationTypeChange} />
                        <button onClick={onClearFilter} className=" justify-center px-2  bg-white hover:bg-gray-100 text-gray-800 font-semibold  border border-gray-400 rounded shadow">
                            Clear Filter
                        </button>
                </div>

                <Table
                    result={result}
                    onPageSelect={onPageSelect}
                    onSizeSelect={onSizeSelect}
                />

            </main>
        </div>
    )
}

export default withAuth(Records)


