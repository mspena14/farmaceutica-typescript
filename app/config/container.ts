import { container } from 'tsyringe'
import { InventoryService } from '../services'
import { PatientRepository, MedicineRepository, PrescriptionRepository } from '../repositories'


container.registerSingleton<PatientRepository>(PatientRepository);
// container.registerSingleton<ProductCartService>(ProductCartService);

container.registerSingleton<MedicineRepository>(MedicineRepository);
container.registerSingleton<InventoryService>(InventoryService);

container.registerSingleton<PrescriptionRepository>(PrescriptionRepository);
// container.registerSingleton<UserService>(UserService);


export default container