import React, {  useState } from "react"


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
                className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
                {value}
            </a>
        </li>
    )
}

const ActiveItem: React.FC<PagItemType> = ({ value, onClick }) => {
    return (
        <li
            onClick={() => onClick(value)}
            className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
        >
            {value}
        </li>
    )
}


const Pagination: React.FC<PaginationType>= ({ currentPage, totalItems, totalPages, onSelect}) => {

    const pages = Array(totalPages).fill('page')

     return (
    <ol className="flex justify-center gap-1 text-xs font-medium">
        <li>
            <a
                onClick={() => alert('implementation pending Pagination component')}
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

        {pages.map((_v, page) => {
            const value = page + 1
            return value === currentPage ? <ActiveItem onClick={onSelect} key={page} value={value}/> : <Item key={page} onClick={onSelect} value={value} />
        })}

 
        <li>
            <a
                onClick={() => alert('implementation pending Pagination component')}
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

export default Pagination
