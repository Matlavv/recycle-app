import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/connection';

export class Category extends Model {
  public id!: number;
  public name!: string;
  public ecologicalColor!: string;
  public binType_id!: number | null;
  public ecologicalIndice_id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Category.init(
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
    ecologicalColor: {
      type: new DataTypes.STRING(32),
      allowNull: false,
    },
    binType_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'BinTypes',
        key: 'id',
      },
      allowNull: true,
    },
    ecologicalIndice_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'EcologicalIndices',
        key: 'id',
      },
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
    tableName: 'Categories',
  },
);
