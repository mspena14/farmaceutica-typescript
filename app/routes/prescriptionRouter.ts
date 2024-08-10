import { Router } from 'express';
import { PrescriptionController } from '../controllers';

export const prescriptionRouter = Router();

prescriptionRouter.get('/', PrescriptionController.getAllPrescriptions);
prescriptionRouter.get('/:id', PrescriptionController.getPrescriptionById);
prescriptionRouter.post('/', PrescriptionController.addPrescription);
prescriptionRouter.put('/:id', PrescriptionController.updatePrescription);
prescriptionRouter.delete('/:id', PrescriptionController.deletePrescription);
