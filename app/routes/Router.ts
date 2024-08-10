import { Router } from 'express';
import {inventoryRouter} from './';


const router = Router();

router.use('/inventory', inventoryRouter)


export default router;