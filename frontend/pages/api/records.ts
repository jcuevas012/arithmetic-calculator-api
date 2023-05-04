
import { withIronSessionApiRoute } from 'iron-session/next';
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import { ironOptions } from '../../utils/config';


 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.session.user?.token;
  const host = process.env.API_HOST
  
  const response = await axios.get(`${host}/api/records`, { 
    params: req.query,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  

  res.status(200).send(response.data)
}


export default withIronSessionApiRoute(handler, ironOptions);