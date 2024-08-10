import { Router } from 'express';
import {inventoryRouter, patientRouter, prescriptionRouter} from './';


const router = Router();

router.use('/inventory', inventoryRouter)
router.use('/patients', patientRouter)
router.use('/prescriptions', prescriptionRouter)

export default router;