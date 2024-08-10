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

    async create(prescripcion: Partial<PrescriptionModel>) { 
        return await PrescriptionModel.create(prescripcion as PrescriptionModel);
    }

    async update(id: number, newPrescripcion: Partial<PrescriptionModel>) { 
        return await PrescriptionModel.update(newPrescripcion, { where: { id } });
    }

    async deleteById(id: number) {
        return await PrescriptionModel.destroy({ where: { id } });
    }

    async listPrescriptionsByPatientId(idPaciente: number) {
        return await PrescriptionModel.findAll({
            where: { patientId: idPaciente }
        });
    }
}
