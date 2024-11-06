import { Router } from 'express';
import AffiliationController from '../controllers/affiliation.controller';

const router = Router();

router.post('/create', AffiliationController.createAffiliation);
router.get('/', AffiliationController.getAffiliations);
router.get('/:id', AffiliationController.getAffiliationById);
router.put('/:id', AffiliationController.updateAffiliation);
router.delete('/:id', AffiliationController.deleteAffiliation);

export default router;
