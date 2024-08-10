import { Request, Response } from 'express'; 
import { container } from 'tsyringe'; 
import { InventoryService } from '../services';

export class InventoryController {

    static async getAllMedicines(_: Request, res: Response) {
        try {
            const inventoryService = await container.resolve(InventoryService);
            const medicines = await inventoryService.getAllMedicines();
            res.status(200).json(medicines);

        } catch (error: any) {
            
            res.status(500).json({ message: error.message });
        }
    }


}

