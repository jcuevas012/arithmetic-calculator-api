
import { NextPageContext } from "next";
import { ironOptions } from "./config";
import buildClient from "../utils/client";
import { getIronSession } from "iron-session";


async function fetchUser(client: any) {
    try {
        const { data } = await client.get('/api/auth/current-user')
        return data.currentUser
    } catch (err) {
        console.log('Error clientFetch with axios')        
    }
}



export async function getSessionInfo(ctx: NextPageContext) {
    const res = ctx.res!
    const req = ctx.req!
    const client = buildClient(ctx)
    let currentUser

    if (typeof window === 'undefined') {
        const session = await getIronSession(req, res, ironOptions);
        currentUser = session.user;
    } else {
        currentUser = await fetchUser(client)
    }
    
    return [currentUser, client]
}