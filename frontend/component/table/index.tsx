import React from 'react'
import Pagination from './pagination'

export interface RecordResultSet {
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

export interface TableProps {
    result: RecordResultSet,
    onPageSelect: (page: number) => void
    onSizeSelect: (size: number) => void
}



const PageDropDown: React.FC<{ totalPages: number, currentPage: number, onChange: (page: number) => void }> = ({ totalPages, currentPage, onChange }) => {

    const pages = Array(10).fill('page')


  const _onChange = ({ target: { value } }: any) => {
    onChange(value)
  } 

    return (
        <div className="flex justify-end py-5">
            <div>
                <p>Quantity</p>
                <select name="page" id="page" onChange={_onChange} >
                {pages.length &&
                    pages.map((_page, i) => {
                        const size = (i+1) * 10
                        return (<option key={size} value={size}>{size}</option>)
                    })}
                </select>    
            </div>
            
        </div>
    )
}



const TableItem: React.FC<{ record: Record }> = ({ record }) => {
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


const Table: React.FC<TableProps> = ({ result: { records, totalItems, totalPages, currentPage }, onPageSelect, onSizeSelect }) => {


    return (
        <div>
            <PageDropDown totalPages={totalPages} currentPage={currentPage} onChange={onSizeSelect} />
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
                            records.map((record) => <TableItem key={record.id} record={record} />)
                            :
                            <tr>
                                <p>NO RECORDS</p>
                            </tr>
                        }
                    </tbody>

                </table>
            </div>
            <Pagination totalItems={totalItems} totalPages={totalPages} currentPage={currentPage} onSelect={onPageSelect} />
            
        </div>

    )
}

export default Table
