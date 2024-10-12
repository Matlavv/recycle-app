import { sequelize } from '../config/connection';
import { Item } from './item.model';
import { Category } from './category.model';
import { BinType } from './binType.model';
import { ProductAlternative } from './productAlternative.model';

Category.hasMany(Item, {
  foreignKey: 'category_id',
  as: 'items',
});

Item.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category',
});

BinType.hasMany(Item, {
  foreignKey: 'binType_id',
  as: 'items',
});

Item.belongsTo(BinType, {
  foreignKey: 'binType_id',
  as: 'binType',
});

Item.hasMany(ProductAlternative, {
  foreignKey: 'item_id',
  as: 'alternatives',
});

ProductAlternative.belongsTo(Item, {
  foreignKey: 'alternative_item_id',
  as: 'alternative',
});

export { sequelize, Item, Category, BinType, ProductAlternative };
