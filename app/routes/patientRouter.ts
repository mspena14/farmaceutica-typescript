import { Router } from 'express';
import { PatientController } from '../controllers';

export const patientRouter = Router();


patientRouter.get('/', PatientController.getAllPatients);
patientRouter.get('/:id', PatientController.getPatientById);
patientRouter.post('/', PatientController.addPatient);
patientRouter.put('/:id', PatientController.updatePatient);
patientRouter.delete('/:id', PatientController.deletePatient);
