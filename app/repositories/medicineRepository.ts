import { injectable } from 'tsyringe';
import { MedicineModel } from '../models';

@injectable()
export class MedicineRepository { 
    async findAll() { 
        return await MedicineModel.findAll();
    }

    async findById(id: number) { 
        return await MedicineModel.findByPk(id);
    }

    async create(medicine: Partial<MedicineModel>) { 
        return await MedicineModel.create(medicine as MedicineModel);
    }

    async update(id: number, newMedicine: Partial<MedicineModel>) { 
        return await MedicineModel.update(newMedicine, { where: {id}})
    }

    async deleteById(id: number) {
        return await MedicineModel.destroy({where: {id: id}})
    }
}