


import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from "iron-session/next";
import axios from 'axios';
import { ironOptions } from '../../../utils/config';

 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await axios.post('http://api:80/api/users/sign-in', { 
    ...req.body
  })
  req.session.user = { 
      token: response.data.token
  };


  await req.session.save();
  
  res.status(201).send({ success: true});
}
export default withIronSessionApiRoute(handler, ironOptions);