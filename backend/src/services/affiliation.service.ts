import { Affiliation } from '../models/affiliation.model';

class AffiliationService {
  async createAffiliation(data: any) {
    return await Affiliation.create(data);
  }

  async getAffiliations() {
    return await Affiliation.findAll();
  }

  async getAffiliationById(id: number) {
    return await Affiliation.findByPk(id);
  }

  async updateAffiliation(id: number, data: any) {
    const affiliation = await Affiliation.findByPk(id);
    if (affiliation) {
      return await affiliation.update(data);
    }
    throw new Error('Affiliation not found');
  }

  async deleteAffiliation(id: number) {
    const affiliation = await Affiliation.findByPk(id);
    if (affiliation) {
      await affiliation.destroy();
      console.log('Affiliation deleted');
      return true;
    }
    throw new Error('Affiliation not found');
  }
}

export default new AffiliationService();
