import { Router } from 'express';
import ItemController from '../controllers/item.controller';

const router = Router();

router.post('/create', ItemController.createItem);
router.get('/', ItemController.getItems);
router.get('/:id', ItemController.getItemById);
router.put('/:id', ItemController.updateItem);
router.delete('/:id', ItemController.deleteItem);

export default router;
