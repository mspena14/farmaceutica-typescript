import { Router } from "express";
import { InventoryController } from "../controllers";

export const inventoryRouter = Router();

inventoryRouter.get('/allProducts', InventoryController.getAllMedicines);