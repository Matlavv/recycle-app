import { Request, Response } from 'express';
import ProductAlternativeService from '../services/productAlternative.service';

class ProductAlternativeController {
  async createProductAlternative(req: Request, res: Response) {
    try {
      const newProductAlternative =
        await ProductAlternativeService.createProductAlternative(req.body);
      res.status(201).json(newProductAlternative);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getProductAlternatives(req: Request, res: Response) {
    try {
      const productAlternatives =
        await ProductAlternativeService.getProductAlternatives();
      res.status(200).json(productAlternatives);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getProductAlternativeById(req: Request, res: Response) {
    try {
      const productAlternative =
        await ProductAlternativeService.getProductAlternativeById(
          +req.params.id,
        );
      res.status(200).json(productAlternative);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async updateProductAlternative(req: Request, res: Response) {
    try {
      const updatedProductAlternative =
        await ProductAlternativeService.updateProductAlternative(
          +req.params.id,
          req.body,
        );
      res.status(200).json(updatedProductAlternative);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteProductAlternative(req: Request, res: Response) {
    try {
      await ProductAlternativeService.deleteProductAlternative(+req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}

export default new ProductAlternativeController();
