import { Router } from "express";
import { InventoryController } from "../controllers";

export const inventoryRouter = Router();

inventoryRouter.get('/', InventoryController.getAllMedicines);
inventoryRouter.post('/', InventoryController.addMedicine);
inventoryRouter.put('/:id', InventoryController.updateMedicines);
inventoryRouter.delete('/:id', InventoryController.deleteMedicines);