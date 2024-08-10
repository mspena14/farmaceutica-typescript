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

}