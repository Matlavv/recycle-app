import { Request, Response } from 'express';
import ItemService from '../services/item.service';

class ItemController {
  async createItem(req: Request, res: Response) {
    try {
      const existingItem = await ItemService.getItemByName(req.body.name);
      if (existingItem) {
        return res
          .status(400)
          .json({ error: 'An item with the same name already exists.' });
      }
      const newItem = await ItemService.createItem(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getItems(req: Request, res: Response) {
    try {
      const items = await ItemService.getItems();
      res.status(200).json(items);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getItemById(req: Request, res: Response) {
    try {
      const item = await ItemService.getItemById(+req.params.id);
      res.status(200).json(item);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async updateItem(req: Request, res: Response) {
    try {
      const updatedItem = await ItemService.updateItem(
        +req.params.id,
        req.body,
      );
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteItem(req: Request, res: Response) {
    try {
      await ItemService.deleteItem(+req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}

export default new ItemController();
