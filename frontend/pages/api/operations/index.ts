
import { withIronSessionApiRoute } from 'iron-session/next';
import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosError } from 'axios';
import { ironOptions } from '../../../utils/config';


 async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.session.user?.token;
  const host = process.env.API_HOST
  let response
  try {
     response = await axios.post(`${host}/api/operations`, 
    req.body,
  { 
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  
  res.status(response.status).send(response.data)
  } catch (e: unknown) {
    let err = e as AxiosError
    res.status(err?.response?.status || 400).send(err.response?.data || {})
  }
  
}


export default withIronSessionApiRoute(handler, ironOptions);