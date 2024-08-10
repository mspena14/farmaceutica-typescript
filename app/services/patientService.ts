import { PatientRepository } from '../repositories';
import { injectable, inject } from 'tsyringe';
import { PatientModel } from "../models";

@injectable()
export class PatientService {
    constructor(
        @inject(PatientRepository) private patientRepository: PatientRepository
    ) {}

    async getAllPatients(): Promise<PatientModel[]> {
        return await this.patientRepository.findAll();
    }

    async getPatientById(id: number): Promise<PatientModel | null> {
        return await this.patientRepository.findById(id);
    }

    async addPatient(patient: PatientModel): Promise<PatientModel> {
        return await this.patientRepository.create(patient);
    };

    async updatePatient(id: number, patient: Partial<PatientModel>) {
        return await this.patientRepository.update(id, patient);
    };
    
    async deletePatient(id: number): Promise<number> {  
        return await this.patientRepository.deleteById(id);
    }
}
