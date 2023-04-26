import dotenv from 'dotenv';
dotenv.config();

import { Options } from 'sequelize';

type Config = { [propKey: string]: Options }  

 const development: Options = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000 //
  }
}


 const test: Options = {
  host: 'localhost',
  port: 5432,
  username: 'test-user',
  database: 'test-db',
  dialect: 'postgres',
}


const config: Config = {
  development, test
}

export default config