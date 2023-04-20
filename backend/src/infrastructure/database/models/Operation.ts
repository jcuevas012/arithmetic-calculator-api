import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequelize'
import { OperationType } from '../../../domain/entities/Operation';

interface OperationRow {
  id: string;
  type: OperationType;
  cost: number;
}

export class SequelizeOperation extends Model<OperationRow> {
  declare id: string;
  declare type: OperationType;
  declare cost: number;
}

SequelizeOperation.init({
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  }, 
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cost: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  
  
}, {
  sequelize,
  paranoid: true, // enable soft delete
  tableName: 'operations'
})

