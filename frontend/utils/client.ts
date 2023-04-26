import axios, { AxiosRequestHeaders } from 'axios'
import { NextPageContext } from 'next'

const buildClient = (context: NextPageContext) => {
  try {
      if (typeof window === 'undefined') {
          return axios.create({
              baseURL: 'http://load-balancer-for-arithmetic-api-918148225.us-east-1.elb.amazonaws.com',
              headers: { ...context.req?.headers } as AxiosRequestHeaders,
          })
      }

      return axios.create({
          baseURL: 'http:localhost:3000',
          headers: { ...context.req?.headers } as AxiosRequestHeaders,
      })
  } catch (error) {
      throw Error('Error building axios client')
  }
}


  

export default buildClient
