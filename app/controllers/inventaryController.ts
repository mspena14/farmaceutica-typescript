import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { InventoryService } from '../services';

export class InventoryController {

    static async getAllMedicines(_: Request, res: Response) {
        try {

            const inventoryService = container.resolve(InventoryService);
            const medicines = await inventoryService.getAllMedicines();
            res.status(200).json(medicines);

        } catch (error: any) {

            res.status(500).json({ message: error.message });
        }
    }

    static async addMedicine(req: Request, res: Response) {

        try {
            const inventoryService = container.resolve(InventoryService);
            const medicines = await inventoryService.addMedicine(req.body);
            console.log(medicines.toJSON());
            res.status(201).json(medicines)

        } catch (error: any) {

            res.status(500).json({ message: error.message });

        }

    }

    static async deleteMedicines(req: Request, res: Response) {
        try {
            const medicineService = container.resolve(InventoryService);
            const medicines = await medicineService.deleteMedicine(parseInt(req.params.id));
            res.status(200).json(medicines);
        } catch (error: any) {

            res.status(500).json({ message: error.message });

        }
    }

    static async updateMedicines(req: Request, res: Response) {
        try {
            
            const inventoryService = container.resolve(InventoryService);
            const medicines = await inventoryService.updateMedicine(parseInt(req.params.id), req.body);
            res.status(200).json(medicines);

        } catch (error: any) {
            
            res.status(500).json({ message: error.message });

        }
    }

}




