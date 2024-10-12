import { Item } from '../models/item.model';

class ItemService {
  async createItem(data: any) {
    return await Item.create(data);
  }

  async getItems() {
    return await Item.findAll();
  }

  async getItemById(id: number) {
    return await Item.findByPk(id);
  }

  async updateItem(id: number, data: any) {
    const item = await Item.findByPk(id);
    if (item) {
      return await item.update(data);
    }
    throw new Error('Item not found');
  }

  async deleteItem(id: number) {
    const item = await Item.findByPk(id);
    if (item) {
      await item.destroy();
      console.log('Item deleted');
      return true;
    }
    throw new Error('Item not found');
  }
}

export default new ItemService();
