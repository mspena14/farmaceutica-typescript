import { Sequelize } from "sequelize-typescript";
import { PatientModel, MedicineModel, PrescriptionModel } from '../models'; // importing the entities
import { config } from 'dotenv';

config(); 

const sequelize: Sequelize = new Sequelize({ 
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [PatientModel, MedicineModel, PrescriptionModel]
})

export default sequelize;