import { injectable } from 'tsyringe';
import { PatientModel } from '../models';

@injectable()
export class PatientRepository { 
    async findAll() { 
        return await PatientModel.findAll();
    }

    async findById(id: number) { 
        return await PatientModel.findByPk(id);
    }

    async create(patient: Partial<PatientModel>) { 
        return await PatientModel.create(patient as PatientModel);
    }

    async update(id: number, newPatient: Partial<PatientModel>) { 
        return await PatientModel.update(newPatient, { where: {id}})
    }

    async deleteById(id: number) {
        return await PatientModel.destroy({where: {id: id}})
    }
}