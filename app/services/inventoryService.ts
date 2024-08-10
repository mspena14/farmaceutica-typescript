import { MedicineRepository } from '../repositories';
import { injectable, inject } from 'tsyringe';
import { MedicineModel } from "../models";

@injectable()
export class InventoryService {
    constructor(
        @inject(MedicineRepository) private medicineRepository: MedicineRepository
    ) {}

    async getAllMedicines(): Promise<MedicineModel[]> {
        return await this.medicineRepository.findAll();
    }

    async getMedicineById(id: number): Promise<MedicineModel | null> {
        return await this.medicineRepository.findById(id);
    }

    async addMedicine(medicine: MedicineModel): Promise<MedicineModel> {
        return await this.medicineRepository.create(medicine);
    }
}