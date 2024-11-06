import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/connection';

export class Product extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public brand!: string;
  public materials!: Array<string>;
  public image!: string | null;
  public binType_id!: number | null;
  public category_id!: number;
  public ecologicalIndice_id!: number;
  public ecologicalColor!: string;
  public isAffiliated!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Product.init(
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
      type: new DataTypes.STRING(512),
      allowNull: false,
    },
    brand: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    materials: {
      type: new DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    binType_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'BinTypes',
        key: 'id',
      },
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
      },
      allowNull: false,
    },
    ecologicalIndice_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'EcologicalIndices',
        key: 'id',
      },
      allowNull: false,
    },
    ecologicalColor: {
      type: new DataTypes.STRING(32),
      allowNull: false,
    },
    image: {
      type: new DataTypes.STRING(256),
      allowNull: true,
    },
    isAffiliated: {
      type: new DataTypes.BOOLEAN(),
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
    tableName: 'Products',
  },
);
