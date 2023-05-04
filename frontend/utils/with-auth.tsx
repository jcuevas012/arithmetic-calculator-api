import { NextPage } from "next"
import NotAuthorized from "../component/not-authorized"

export const withAuth = (Component: NextPage) =>  {
    return (ctx: any) => {
        const {currentUser} = ctx

        if (!currentUser) {
             return <NotAuthorized/>
        }

        return <Component/>
    }
}
