import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  async createProduct(req: Request, res: Response) {
    try {
      const existingProduct = await ProductService.getProductByName(
        req.body.name,
      );
      if (existingProduct) {
        console.log('Product already exists');
        // return res
        //   .status(400)
        //   .json({ error: 'An product with the same name already exists.' });
      }
      const newProduct = await ProductService.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getProducts(req: Request, res: Response) {
    try {
      const products = await ProductService.getProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const product = await ProductService.getProductById(+req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const updatedProduct = await ProductService.updateProduct(
        +req.params.id,
        req.body,
      );
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      await ProductService.deleteProduct(+req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}

export default new ProductController();
