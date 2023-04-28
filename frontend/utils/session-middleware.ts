
import { NextPageContext } from "next";
import jwt from 'jsonwebtoken'
import { ironOptions } from "./config";
import buildClient from "../utils/client";
import { getIronSession } from "iron-session";


async function fetchUser(client: any) {
    try {
        const { data } = await client.get('/api/auth/me')
        return data.currentUser
    } catch (err) {
        console.log('Error fetchUser with axios')        
    }
}



export async function getSessionInfo(ctx: NextPageContext) {
    const res = ctx.res!
    const req = ctx.req!
    const client = buildClient(ctx)
    let currentUser

    if (typeof window === 'undefined') {
        const session = await getIronSession(req, res, ironOptions);
        const token = session?.user?.token!
        currentUser = jwt.decode(token);
    } else {
        currentUser = await fetchUser(client)
    }
    
    return [currentUser, client]
}