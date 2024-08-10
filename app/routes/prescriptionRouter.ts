import { Router } from 'express';
import { PrescriptionController } from '../controllers';

export const prescriptionRouter = Router();

prescriptionRouter.get('/prescriptions', PrescriptionController.getAllPrescriptions);
prescriptionRouter.get('/prescriptions/:id', PrescriptionController.getPrescriptionById);
prescriptionRouter.post('/prescriptions', PrescriptionController.addPrescription);
prescriptionRouter.put('/prescriptions/:id', PrescriptionController.updatePrescription);
prescriptionRouter.delete('/prescriptions/:id', PrescriptionController.deletePrescription);
prescriptionRouter.get('/patients/:patientId/prescriptions', PrescriptionController.getPrescriptionsByPatientId);
