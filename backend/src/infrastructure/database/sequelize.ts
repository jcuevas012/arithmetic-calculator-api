import { Sequelize } from "sequelize";
import config from "./config";

const key = process.env.NODE_ENV as string

export const sequelize = new Sequelize(config[key])