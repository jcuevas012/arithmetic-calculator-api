
import { withIronSessionApiRoute } from 'iron-session/next';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ironOptions } from '../../../utils/config';
import axios from 'axios';


 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.session.user?.token;
  
  const response = await axios.get('http://api:80/api/users/current-user', { 
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  
  const currentUser = response.data 

  res.status(200).send(currentUser)
}


export default withIronSessionApiRoute(handler, ironOptions);