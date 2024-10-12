import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/connection';

export class Item extends Model {
  public id!: number;
  public name!: string;
  public binType_id!: number | null;
  public category_id!: number;
  public ecologicalGrade!: number;
  public ecologicalColor!: string;
  public image!: string | null;
  public affiliationLink!: string | null;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Item.init(
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
    binType_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ecologicalGrade: {
      type: DataTypes.INTEGER,
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
    affiliationLink: {
      type: new DataTypes.STRING(512),
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
    tableName: 'Items',
  },
);
