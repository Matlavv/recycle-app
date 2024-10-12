import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/connection';

export class BinType extends Model {
  public id!: number;
  public name!: string;
  public description!: string | null;
  public createdAt!: Date;
  public updatedAt!: Date;
}

BinType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(256),
      allowNull: true,
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
    tableName: 'BinTypes',
  },
);
