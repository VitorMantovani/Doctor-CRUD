import { AppDataSource } from "..";
import { Doctor } from "../entities/doctor";

type DoctorRequest = {
    name: string;
    crm: string;
    phone: string;
    mobilePhone: string;
    zipCode: string;
}

export class doctorRepository {
    
    repository = AppDataSource.getRepository(Doctor);
    
    async insert({name, crm, phone, mobilePhone, zipCode}: DoctorRequest): Promise<Doctor> {
    
        return this.repository.save({name, crm, phone, mobilePhone, zipCode});

    }

    async select() {
        return this.repository.find()
    }

}



