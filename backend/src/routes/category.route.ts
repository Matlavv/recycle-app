import { Router } from 'express';
import CategoryController from '../controllers/category.controller';

const router = Router();

router.post('/create', CategoryController.createCategory);
router.get('/', CategoryController.getCategories);
router.get('/:id', CategoryController.getCategoryById);
router.put('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);

export default router;
