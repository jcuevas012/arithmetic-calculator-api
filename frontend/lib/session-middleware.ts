import { getIronSession } from "iron-session/edge";
import { NextPageContext } from "next";
import { ironOptions } from "./config";


export async function getSessionInfo(ctx: NextPageContext) {
    const res = ctx.res!
    const req = ctx.req!

    const session = await getIronSession(req, res, ironOptions);
  
    const { user } = session;

    return user

}