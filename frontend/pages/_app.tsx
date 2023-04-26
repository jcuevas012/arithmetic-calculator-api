import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import Header from '../component/header/header'
import buildClient from '../utils/client'

function AppComponent({ Component, pageProps, currentUser }: AppProps | any) {
    return (
        <SWRConfig
            value={{
                refreshInterval: 3000,
            }}
        >
            <Header currentUser={currentUser} />
            <div className="container mx-auto">
                <Component currentUser={currentUser} {...pageProps} />
            </div>
            
        </SWRConfig>
    )
}

AppComponent.getInitialProps = async (appContext: AppContext) => {
    const client = buildClient(appContext.ctx)
    let data

    try {
        const response = await client.get('/api/users/current-user')
        data = response.data
    } catch {}

    let pageProps = {}

    if (appContext.Component.getInitialProps) {
        // this is passing client http and current user to all pages
        // @ts-ignore
        pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, data?.currentUser)
    }

    return {
        ...data,
        pageProps,
    }
}

export default AppComponent
