import { BinType } from '../models/binType.model';

class BinTypeService {
  async createBinType(data: any) {
    return await BinType.create(data);
  }

  async getBinTypes() {
    return await BinType.findAll();
  }

  async getBinTypeById(id: number) {
    return await BinType.findByPk(id);
  }

  async updateBinType(id: number, data: any) {
    const binType = await BinType.findByPk(id);
    if (binType) {
      console.log('BinType updated');
      return await binType.update(data);
    }
    throw new Error('BinType not found');
  }

  async deleteBinType(id: number) {
    const binType = await BinType.findByPk(id);
    if (binType) {
      await binType.destroy();
      console.log('BinType deleted');
      return true;
    }
    throw new Error('BinType not found');
  }

  async getBinTypeByName(name: string) {
    return await BinType.findOne({ where: { name } });
  }
}

export default new BinTypeService();
