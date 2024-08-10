import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { PatientService } from '../services';

export class PatientController {

    static async getAllPatients(_: Request, res: Response) {
        try {
            const patientService = container.resolve(PatientService);
            const patients = await patientService.getAllPatients();
            res.status(200).json(patients);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getPatientById(req: Request, res: Response) {
        try {
            const patientService = container.resolve(PatientService);
            const patient = await patientService.getPatientById(parseInt(req.params.id));
            if (patient) {
                res.status(200).json(patient);
            } else {
                res.status(404).json({ message: 'Patient not found' });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async addPatient(req: Request, res: Response) {
        try {
            const patientService = container.resolve(PatientService);
            const patient = await patientService.addPatient(req.body);
            res.status(201).json(patient);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updatePatient(req: Request, res: Response) {
        try {
            const patientService = container.resolve(PatientService);
            const result = await patientService.updatePatient(parseInt(req.params.id), req.body);
            if (result[0] > 0) {
                res.status(200).json({ message: 'Patient updated successfully' });
            } else {
                res.status(404).json({ message: 'Patient not found' });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deletePatient(req: Request, res: Response) {
        try {
            const patientService = container.resolve(PatientService);
            const result = await patientService.deletePatient(parseInt(req.params.id));
            if (result > 0) {
                res.status(200).json({ message: 'Patient deleted successfully' });
            } else {
                res.status(404).json({ message: 'Patient not found' });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
