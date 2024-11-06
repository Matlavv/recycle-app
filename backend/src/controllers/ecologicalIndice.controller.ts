import { Request, Response } from 'express';
import EcologicalIndiceService from '../services/ecologicalIndice.service';

class EcologicalIndiceController {
  async createEcologicalIndice(req: Request, res: Response) {
    try {
      const newEcologicalIndice =
        await EcologicalIndiceService.createEcologicalIndice(req.body);
      res.status(201).json(newEcologicalIndice);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getEcologicalIndices(req: Request, res: Response) {
    try {
      const ecologicalIndices =
        await EcologicalIndiceService.getEcologicalIndices();
      res.status(200).json(ecologicalIndices);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getEcologicalIndiceById(req: Request, res: Response) {
    try {
      const ecologicalIndice =
        await EcologicalIndiceService.getEcologicalIndiceById(+req.params.id);
      res.status(200).json(ecologicalIndice);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async updateEcologicalIndice(req: Request, res: Response) {
    try {
      const updatedEcologicalIndice =
        await EcologicalIndiceService.updateEcologicalIndice(
          +req.params.id,
          req.body,
        );
      res.status(200).json(updatedEcologicalIndice);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteEcologicalIndice(req: Request, res: Response) {
    try {
      await EcologicalIndiceService.deleteEcologicalIndice(+req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}

export default new EcologicalIndiceController();
