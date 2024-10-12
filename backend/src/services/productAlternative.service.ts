import { ProductAlternative } from '../models/productAlternative.model';

class ProductAlternativeService {
  async createProductAlternative(data: any) {
    return await ProductAlternative.create(data);
  }

  async getProductAlternatives() {
    return await ProductAlternative.findAll();
  }

  async getProductAlternativeById(id: number) {
    return await ProductAlternative.findByPk(id);
  }

  async updateProductAlternative(id: number, data: any) {
    const productAlternative = await ProductAlternative.findByPk(id);
    if (productAlternative) {
      return await productAlternative.update(data);
    }
    throw new Error('ProductAlternative not found');
  }

  async deleteProductAlternative(id: number) {
    const productAlternative = await ProductAlternative.findByPk(id);
    if (productAlternative) {
      await productAlternative.destroy();
      console.log('ProductAlternative deleted');
      return true;
    }
    throw new Error('ProductAlternative not found');
  }
}

export default new ProductAlternativeService();
