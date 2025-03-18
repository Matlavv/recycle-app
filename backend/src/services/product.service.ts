import { Product } from '../models/product.model';

class ProductService {
  async createProduct(data: any) {
    return await Product.create(data);
  }

  async getProducts() {
    return await Product.findAll();
  }

  async getProductById(id: number) {
    return await Product.findByPk(id);
  }

  async updateProduct(id: number, data: any) {
    const product = await Product.findByPk(id);
    if (product) {
      return await product.update(data);
    }
    throw new Error('Product not found');
  }

  async deleteProduct(id: number) {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      console.log('Product deleted');
      return true;
    }
    throw new Error('Product not found');
  }

  async getProductByName(name: string) {
    return await Product.findOne({ where: { name } });
  }
}

export default new ProductService();
