import axios from 'axios'
import { ReactElement, useState } from 'react'

interface UseRequestProps {
    url: string
    method: 'post' | 'put' | 'delete'
    body?: any
    onSuccess: Function
}

const useRequest = (options: UseRequestProps) => {
    const [errors, setErrors] = useState<ReactElement | null>()
    const [isLoading, setLoading] = useState<boolean>(false)

    const request = async (params = {}) => {
        try {
            setErrors(null)
            setLoading(true)
            const response = await axios[options.method](options.url, { ...options.body, ...params})

            if (options.onSuccess) {
                setLoading(false)
                options.onSuccess(response.data)
            }

        } catch (error: any) {
            setLoading(false)
            const errors = error.response?.data?.errors
            setErrors(errors && errors.map((err: any, i: number) => <div key={i}>{err.message}</div>))
        }
    }

    return [request, errors, isLoading ]
}

export default useRequest
