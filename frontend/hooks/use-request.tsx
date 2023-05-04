import axios from 'axios'
import { useState } from 'react'

interface UseRequestProps {
    url: string
    method: 'post' | 'put' | 'delete'
    body?: any
    onSuccess: Function
}

const useRequest = (options: UseRequestProps) => {
    const [errors, setErrors] = useState<Array<string>>([])
    const [isLoading, setLoading] = useState<boolean>(false)

    const request = async (params = {}) => {
        try {
            setErrors([])
            setLoading(true)
            const response = await axios[options.method](options.url, { ...options.body, ...params})

            if (options.onSuccess) {
                setLoading(false)
                options.onSuccess(response.data)
            }

        } catch (error: any) {
            setLoading(false)
            
            const errors = error.response?.data?.errors || ['Something went wrong']
            setErrors(errors)
        }
    }

    return [request, errors, isLoading ]
}

export default useRequest
