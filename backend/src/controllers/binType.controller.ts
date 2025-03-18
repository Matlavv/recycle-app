import { Request, Response, NextFunction } from 'express';
import BinTypeService from '../services/binType.service';

class BinTypeController {
  createBinType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const existingBinType = await BinTypeService.getBinTypeByName(
        req.body.name,
      );
      if (existingBinType) {
        console.log('BinType already exists');
      }
      const newBinType = await BinTypeService.createBinType(req.body);
      res.status(201).json(newBinType);
    } catch (error) {
      next(error);
    }
  };

  getBinTypes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const binTypes = await BinTypeService.getBinTypes();
      res.status(200).json(binTypes);
    } catch (error) {
      next(error);
    }
  };

  getBinTypeById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const binType = await BinTypeService.getBinTypeById(+req.params.id);
      res.status(200).json(binType);
    } catch (error) {
      next(error);
    }
  };

  updateBinType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updatedBinType = await BinTypeService.updateBinType(
        +req.params.id,
        req.body,
      );
      res.status(200).json(updatedBinType);
    } catch (error) {
      next(error);
    }
  };

  deleteBinType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await BinTypeService.deleteBinType(+req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}

export default new BinTypeController();
