import { Router } from 'express';
import BinTypeController from '../controllers/binType.controller';

const router = Router();

router.post('/create', BinTypeController.createBinType);
router.get('/', BinTypeController.getBinTypes);
router.get('/:id', BinTypeController.getBinTypeById);
router.put('/:id', BinTypeController.updateBinType);
router.delete('/:id', BinTypeController.deleteBinType);

export default router;
