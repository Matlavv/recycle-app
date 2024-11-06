import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/connection';

export class Affiliation extends Model {
  public id!: number;
  public product_id!: number;
  public totalClicks!: number;
  public uniqueClicks!: number;
  public clicksPerDay!: number;
  public lastClickedAt!: Date;
  public link!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Affiliation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
      allowNull: false,
    },
    totalClicks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    uniqueClicks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    clicksPerDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    lastClickedAt: {
      type: DataTypes.DATE,
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
    tableName: 'Affiliations',
  },
);
