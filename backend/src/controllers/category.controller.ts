import { Request, Response } from 'express';
import CategoryService from '../services/category.service';

class CategoryController {
  async createCategory(req: Request, res: Response) {
    try {
      const newCategory = await CategoryService.createCategory(req.body);
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getCategories(req: Request, res: Response) {
    try {
      const categories = await CategoryService.getCategories();
      res.status(200).json(categories);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getCategoryById(req: Request, res: Response) {
    try {
      const category = await CategoryService.getCategoryById(+req.params.id);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async updateCategory(req: Request, res: Response) {
    try {
      const updatedCategory = await CategoryService.updateCategory(
        +req.params.id,
        req.body,
      );
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      await CategoryService.deleteCategory(+req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}

export default new CategoryController();
