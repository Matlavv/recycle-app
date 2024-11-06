import { Router } from 'express';
import EcologicalIndiceController from '../controllers/ecologicalIndice.controller';

const router = Router();

router.post('/create', EcologicalIndiceController.createEcologicalIndice);
router.get('/', EcologicalIndiceController.getEcologicalIndices);
router.get('/:id', EcologicalIndiceController.getEcologicalIndiceById);
router.put('/:id', EcologicalIndiceController.updateEcologicalIndice);
router.delete('/:id', EcologicalIndiceController.deleteEcologicalIndice);

export default router;
