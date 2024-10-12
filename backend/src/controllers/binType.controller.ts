import { Request, Response } from 'express';
import BinTypeService from '../services/binType.service';

class BinTypeController {
  async createBinType(req: Request, res: Response) {
    try {
      const newBinType = await BinTypeService.createBinType(req.body);
      res.status(201).json(newBinType);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getBinTypes(req: Request, res: Response) {
    try {
      const binTypes = await BinTypeService.getBinTypes();
      res.status(200).json(binTypes);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getBinTypeById(req: Request, res: Response) {
    try {
      const binType = await BinTypeService.getBinTypeById(+req.params.id);
      res.status(200).json(binType);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async updateBinType(req: Request, res: Response) {
    try {
      const updatedBinType = await BinTypeService.updateBinType(
        +req.params.id,
        req.body,
      );
      res.status(200).json(updatedBinType);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteBinType(req: Request, res: Response) {
    try {
      await BinTypeService.deleteBinType(+req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}

export default new BinTypeController();
