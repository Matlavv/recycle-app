import { Router } from 'express';
import ProductAlternativeController from '../controllers/productAlternative.controller';

const router = Router();

router.post('/create', ProductAlternativeController.createProductAlternative);
router.get('/', ProductAlternativeController.getProductAlternatives);
router.get('/:id', ProductAlternativeController.getProductAlternativeById);
router.put('/:id', ProductAlternativeController.updateProductAlternative);
router.delete('/:id', ProductAlternativeController.deleteProductAlternative);

export default router;
