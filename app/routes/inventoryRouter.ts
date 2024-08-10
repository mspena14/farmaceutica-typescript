import { Router } from "express";
import { InventoryController } from "../controllers";

export const inventoryRouter = Router();

inventoryRouter.get('/', InventoryController.getAllMedicines);