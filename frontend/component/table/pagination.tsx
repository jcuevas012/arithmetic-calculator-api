import React, { useEffect, useState } from "react"


interface PaginationType {
    totalItems: number
    totalPages: number
    currentPage: number
    onSelect: (page: number) => void
}


interface PagItemType {
    value: number,
    onClick: (number: number) => void
}

const Item: React.FC<PagItemType> = ({ value, onClick }) => {
    return (
        <li>
            <a
                onClick={() => onClick(value)}
                className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700'>
                {value}
            </a>
        </li>
    )
}

const ActiveItem: React.FC<PagItemType> = ({ value, onClick }) => {
    return (
        <li>
            <a
                onClick={() => onClick(value)}
                className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600  hover:bg-indigo-700'
            >
                {value}
            </a>


        </li>
    )
}


const Pagination: React.FC<PaginationType> = ({ currentPage, totalItems, totalPages, onSelect }) => {

    const [_currentPage, setCurrentPage] = useState(currentPage)

    useEffect(() => {
        setCurrentPage(currentPage)
    }, [currentPage])

    const pages = Array(totalPages).fill('page')

    const onArrowClick = (type: string) => {

        if (type === 'increase' && _currentPage < totalPages) {
            const value = _currentPage + 1
            setCurrentPage(value)
        } else {
            const value = _currentPage - 1
            setCurrentPage(value && value)
        }

        onSelect(_currentPage)
    }

    return (
        <ol className="flex justify-center gap-1 text-xs font-medium py-3">
            <li>
                <a
                    onClick={() => onArrowClick('decrease')}
                    className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700'
                >
                    <span className="sr-only">Prev Page</span>
                    <p id="decrease"> {'<'}</p>
                </a>
            </li>

            {pages.map((_v, page) => {
                const value = page + 1
                return value === _currentPage ? <ActiveItem onClick={onSelect} key={page} value={value} /> : <Item key={page} onClick={onSelect} value={value} />
            })}

            <li>
                <a
                    onClick={() => onArrowClick('increase')}
                    className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700'
                >
                    <span className="sr-only">Next Page</span>
                    <p id="increase" >{'>'}</p>
                </a>
            </li>
        </ol>

    )



}

export default Pagination
