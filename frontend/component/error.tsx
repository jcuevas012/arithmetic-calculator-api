import React  from 'react'

const Errors: React.FC<{ errors?: Array<string> }> = ({ errors }) => {

    return (
        <div className='text-sm text-red-800 py-3'>
            {Array.isArray(errors) && errors.length ? errors.map((err: any, i: number) => <div key={i}><p className="error-msg">{err}</p></div>) : ''}
        </div>
    )
}

export default Errors
