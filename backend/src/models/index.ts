import { sequelize } from '../config/connection';
import { Product } from './product.model';
import { Category } from './category.model';
import { BinType } from './binType.model';
import { Affiliation } from './affiliation.model';
import { EcologicalIndice } from './ecologicalIndice.model';

EcologicalIndice.hasMany(Category, {
  foreignKey: 'ecologicalIndice_id',
  as: 'categories',
});
Category.belongsTo(EcologicalIndice, {
  foreignKey: 'ecologicalIndice_id',
  as: 'ecologicalIndice',
});
BinType.hasMany(Product, {
  foreignKey: 'binType_id',
  as: 'products',
});
Product.belongsTo(BinType, {
  foreignKey: 'binType_id',
  as: 'binType',
});
Category.hasMany(Product, {
  foreignKey: 'category_id',
  as: 'products',
});
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category',
});
Product.hasMany(Affiliation, {
  foreignKey: 'product_id',
  as: 'affiliations',
});
Affiliation.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'product',
});

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to synchronize the database:', error);
  }
})();

export { sequelize, Product, Category, BinType, Affiliation, EcologicalIndice };
