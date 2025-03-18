import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/connection';

export class EcologicalIndice extends Model {
  public id!: number;
  public grade!: string;
  public theme!: string;
  public color!: string;
  public description!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

EcologicalIndice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'EcologicalIndices',
    modelName: 'EcologicalIndice',
  },
);
