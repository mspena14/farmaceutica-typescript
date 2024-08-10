import { injectable } from 'tsyringe';
import { PrescriptionModel } from '../models';

@injectable()
export class PrescriptionRepository { 
    async findAll() { 
        return await PrescriptionModel.findAll();
    }

    async findById(id: number) { 
        return await PrescriptionModel.findByPk(id);
    }

    async create(prescription: Partial<PrescriptionModel>) { 
        return await PrescriptionModel.create(prescription as PrescriptionModel);
    }

    async update(id: number, newPrescription: Partial<PrescriptionModel>) { 
        return await PrescriptionModel.update(newPrescription, { where: {id}})
    }

    async deleteById(id: number) {
        return await PrescriptionModel.destroy({where: {id: id}})
    }
}