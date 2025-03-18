import { EcologicalIndice } from '../models/ecologicalIndice.model';

class EcologicalIndiceService {
  async createEcologicalIndice(data: any) {
    return await EcologicalIndice.create(data);
  }

  async getEcologicalIndices() {
    return await EcologicalIndice.findAll();
  }

  async getEcologicalIndiceById(id: number) {
    return await EcologicalIndice.findByPk(id);
  }

  async updateEcologicalIndice(id: number, data: any) {
    const ecologicalIndice = await EcologicalIndice.findByPk(id);
    if (ecologicalIndice) {
      return await ecologicalIndice.update(data);
    }
    throw new Error('EcologicalIndice not found');
  }

  async deleteEcologicalIndice(id: number) {
    const ecologicalIndice = await EcologicalIndice.findByPk(id);
    if (ecologicalIndice) {
      await ecologicalIndice.destroy();
      console.log('EcologicalIndice deleted');
      return true;
    }
    throw new Error('EcologicalIndice not found');
  }

  async getEcologicalIndiceByGradeAndTheme(grade: string, theme: string) {
    return await EcologicalIndice.findOne({ where: { grade, theme } });
  }
}

export default new EcologicalIndiceService();
