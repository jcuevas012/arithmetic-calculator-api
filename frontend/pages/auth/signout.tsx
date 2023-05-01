import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useRequest from '../../hooks/use-request'

const SignOutPage: NextPage = () => {
    const router = useRouter()
    const [request] = useRequest({
        method: 'post',
        url: '/api/auth/sign-out',
        body: {},
        onSuccess: () => router.push('/'),
    })

    useEffect(() => {
        //@ts-ignore
        request()
    }, [])

    return <p>Signing out ...</p>
}

export default SignOutPage
