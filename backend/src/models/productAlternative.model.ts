import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/connection';

export class ProductAlternative extends Model {
  public id!: number;
  public item_id!: number;
  public alternative_item_id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

ProductAlternative.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Items',
        key: 'id',
      },
      allowNull: false,
    },
    alternative_item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Items',
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
    tableName: 'ProductAlternatives',
  },
);
