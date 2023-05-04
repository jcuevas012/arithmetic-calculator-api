import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import OperationTypeDropDown from '../../component/operation-dropdown'
import Table, { RecordResultSet } from '../../component/table'
import { withAuth } from '../../utils/with-auth'



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

    const [filter, setFilter] = useState<RecordFilter>({
        size: 10,
        page: 1,
        operationId: ''
    })



    const fetchData = async () => {
        try {
            const { data } = await axios.get('/api/records')
            setResult(data)
        } catch (error) {
        }
    }

    const onOperationTypeChange = async (operationId: string) => {
        if (operationId) {
            const { data } = await axios.get(`/api/records?operationId=${operationId}`)
            setResult(data)
        }
    }

    const onPageSelect = async (page: number) => {
        if (page) {
            const { data } = await axios.get(`/api/records?page=${page}`)
            setResult(data)
        }
    }

        const onSizeSelect = async (size: number) => {
        if (size) {
            const { data } = await axios.get(`/api/records?size=${size}`)
            setResult(data)
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
                <div className="py-6">
                    <OperationTypeDropDown onChange={onOperationTypeChange} />
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


