import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { PrescriptionService } from '../services';

export class PrescriptionController {

    static async getAllPrescriptions(_: Request, res: Response) {
        try {
            const prescriptionService = container.resolve(PrescriptionService);
            const prescriptions = await prescriptionService.getAllPrescriptions();
            res.status(200).json(prescriptions);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getPrescriptionById(req: Request, res: Response) {
        try {
            const prescriptionService = container.resolve(PrescriptionService);
            const prescription = await prescriptionService.getPrescriptionById(parseInt(req.params.id));
            if (prescription) {
                res.status(200).json(prescription);
            } else {
                res.status(404).json({ message: 'Prescription not found' });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async addPrescription(req: Request, res: Response) {
        try {
            const prescriptionService = container.resolve(PrescriptionService);
            const prescription = await prescriptionService.addPrescription(req.body);
            res.status(201).json(prescription);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updatePrescription(req: Request, res: Response) {
        try {
            const prescriptionService = container.resolve(PrescriptionService);
            const result = await prescriptionService.updatePrescription(parseInt(req.params.id), req.body);
            if (result[0] > 0) {
                res.status(200).json({ message: 'Prescription updated successfully' });
            } else {
                res.status(404).json({ message: 'Prescription not found' });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deletePrescription(req: Request, res: Response) {
        try {
            const prescriptionService = container.resolve(PrescriptionService);
            const result = await prescriptionService.deletePrescription(parseInt(req.params.id));
            if (result > 0) {
                res.status(200).json({ message: 'Prescription deleted successfully' });
            } else {
                res.status(404).json({ message: 'Prescription not found' });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getPrescriptionsByPatientId(req: Request, res: Response) {
        try {
            const prescriptionService = container.resolve(PrescriptionService);
            const prescriptions = await prescriptionService.getPrescriptionsByPatientId(parseInt(req.params.patientId));
            res.status(200).json(prescriptions);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
