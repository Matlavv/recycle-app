import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

router.post('/create', ProductController.createProduct);
router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.getProductById);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

export default router;