import { PrescriptionRepository } from '../repositories';
import { injectable, inject } from 'tsyringe';
import { PrescriptionModel } from "../models";

@injectable()
export class PrescriptionService {
    constructor(
        @inject(PrescriptionRepository) private prescriptionRepository: PrescriptionRepository
    ) {}

    async getAllPrescriptions(): Promise<PrescriptionModel[]> {
        return await this.prescriptionRepository.findAll();
    }

    async getPrescriptionById(id: number): Promise<PrescriptionModel | null> {
        return await this.prescriptionRepository.findById(id);
    }

    async addPrescription(prescription: PrescriptionModel): Promise<PrescriptionModel> {
        return await this.prescriptionRepository.create(prescription);
    };

    async updatePrescription(id: number, prescription: Partial<PrescriptionModel>) {
        return await this.prescriptionRepository.update(id, prescription);
    };
    
    async deletePrescription(id: number): Promise<number> {
        return await this.prescriptionRepository.deleteById(id);
    }

    async getPrescriptionsByPatientId(patientId: number): Promise<PrescriptionModel[]> {
        return await this.prescriptionRepository.listPrescriptionsByPatientId(patientId);
    }
}
