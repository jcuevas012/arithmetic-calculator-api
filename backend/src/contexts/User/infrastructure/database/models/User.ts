import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize';

interface UserRow {
  id: number;
  username: string;
  password: string;
  status: string;
}

export class SequelizeUser extends Model<UserRow, Omit<UserRow, 'id'>> {
  declare id: number;
  declare username: string;
  declare password: string;
  declare status: string;
}

SequelizeUser.init({
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true
  }, 
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'users'
})