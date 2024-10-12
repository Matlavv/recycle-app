import { Category } from '../models/category.model';

class CategoryService {
  async createCategory(data: any) {
    return await Category.create(data);
  }

  async getCategories() {
    return await Category.findAll();
  }

  async getCategoryById(id: number) {
    return await Category.findByPk(id);
  }

  async updateCategory(id: number, data: any) {
    const category = await Category.findByPk(id);
    if (category) {
      return await category.update(data);
    }
    throw new Error('Category not found');
  }

  async deleteCategory(id: number) {
    const category = await Category.findByPk(id);
    if (category) {
      await category.destroy();
      console.log('Category deleted');
      return true;
    }
    throw new Error('Category not found');
  }
}

export default new CategoryService();
