import axios, { AxiosRequestHeaders } from 'axios'
import { NextPageContext } from 'next'

const buildClient = (context: NextPageContext) => {
  try {
      return axios.create({
          headers: { ...context.req?.headers } as AxiosRequestHeaders,
      })
    } catch (error) {
      throw Error('Error building axios client')
  }
}


  

export default buildClient
