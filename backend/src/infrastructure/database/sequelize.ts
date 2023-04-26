import { Sequelize } from "sequelize";
import config from "./config";

const key = process.env.NODE_ENV as string

console.log('******************')
console.log(config[key])

export const sequelize = new Sequelize(config[key])