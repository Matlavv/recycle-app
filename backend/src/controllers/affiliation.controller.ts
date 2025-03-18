import { Request, Response } from 'express';
import AffiliationService from '../services/affiliation.service';

class AffiliationController {
  async createAffiliation(req: Request, res: Response) {
    try {
      const newAffiliation = await AffiliationService.createAffiliation(
        req.body,
      );
      res.status(201).json(newAffiliation);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getAffiliations(req: Request, res: Response) {
    try {
      const affiliations = await AffiliationService.getAffiliations();
      res.status(200).json(affiliations);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getAffiliationById(req: Request, res: Response) {
    try {
      const affiliation = await AffiliationService.getAffiliationById(
        +req.params.id,
      );
      res.status(200).json(affiliation);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async updateAffiliation(req: Request, res: Response) {
    try {
      const updatedAffiliation = await AffiliationService.updateAffiliation(
        +req.params.id,
        req.body,
      );
      res.status(200).json(updatedAffiliation);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteAffiliation(req: Request, res: Response) {
    try {
      await AffiliationService.deleteAffiliation(+req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}

export default new AffiliationController();
