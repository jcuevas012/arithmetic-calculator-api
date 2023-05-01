


import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from '../../../utils/config';

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    await req.session.destroy();
    
   res.redirect(307, '/')
  
}
export default withIronSessionApiRoute(handler, ironOptions);