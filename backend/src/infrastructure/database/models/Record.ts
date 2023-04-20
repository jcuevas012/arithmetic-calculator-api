import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize'
import { SequelizeOperation } from './Operation';
import { SequelizeUser } from './User';

interface RecordRow {
   id: string;
   amount: number;
   userBalance: number;
   userId: string;
   operationId: string;
   operationResponse: string;
}

export class SequelizeRecord extends Model<RecordRow> {
  declare id: string;
  declare operationId: string;
  declare userId: string;
  declare amount: number;
  declare userBalance: number;
  declare operationResponse: string;
  declare createdAt: string;
}

SequelizeRecord.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  }, 
  amount: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  }, 
  userBalance: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  }, 
  operationResponse: {
    allowNull: false,
    type: DataTypes.STRING,
  }, 
  userId: {
    allowNull: false,
    type: DataTypes.UUIDV4,
  },
  operationId: {
    allowNull: false,
    type: DataTypes.UUIDV4,
  }
}, {
  sequelize,
  paranoid: true, // enable soft delete
  tableName: 'records'
})

SequelizeRecord.belongsTo(SequelizeUser, { as: 'user', foreignKey: 'userId'} )
SequelizeRecord.belongsTo(SequelizeOperation, { as: 'operation', foreignKey: 'operationId'})