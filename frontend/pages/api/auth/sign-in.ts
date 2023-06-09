


import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from "iron-session/next";
import axios from 'axios';
import { ironOptions } from '../../../utils/config';

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const host = process.env.API_HOST
  
  const response = await axios.post(`${host}/api/users/sign-in`, { 
    ...req.body
  })
  req.session.user = { 
      token: response.data.token
  };


  await req.session.save();
  
  res.status(response.status).send(response.data);
}
export default withIronSessionApiRoute(handler, ironOptions);