import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import Header from '../component/header/header'
import { getSessionInfo } from '../utils/session-middleware'
import { useRouter } from 'next/router'

function AppComponent({ Component, pageProps, currentUser }: AppProps | any) {
        

    return (
            <div className="container mx-auto pt-2">
                <Header currentUser={currentUser} />
                <Component currentUser={currentUser} {...pageProps} />
            </div>
    )
}

AppComponent.getInitialProps = async (appContext: AppContext) => {

    const [currentUser, client ] = await getSessionInfo(appContext.ctx)

    let pageProps = {}

    if (appContext.Component.getInitialProps) {
        // this is passing client http and current user to all pages
        // @ts-ignore
        pageProps = await appContext.Component.getInitialProps(appContext.ctx, client, currentUser)
    }

    return {
        currentUser,
        pageProps,
    }
}

export default AppComponent
