import React  from 'react'

const Errors: React.FC<{ errors?: Array<string> }> = ({ errors }) => {

    return (
        <div className='text-sm text-red-800'>
            {Array.isArray(errors) && errors.length ? errors.map((err: any, i: number) => <div key={i}>{err}</div>) : ''}
        </div>
    )
}

export default Errors
