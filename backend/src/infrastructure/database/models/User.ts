import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize'

interface UserRow {
  id: string;
  username: string;
  password: string;
  status: string;
  balance: number;
}

export class SequelizeUser extends Model<UserRow> {
  declare id: string;
  declare username: string;
  declare password: string;
  declare status: string;
  declare balance: number;
}

SequelizeUser.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    autoIncrement: true
  }, 
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  balance: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
}, {
  sequelize,
  paranoid: true, // enable soft delete
  tableName: 'users'
})