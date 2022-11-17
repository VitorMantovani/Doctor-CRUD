import { AppDataSource } from "..";
import { Doctor } from "../entities/doctor";
import { Specialty } from "../entities/specialty";

type DoctorRequest = {
    name: string;
    crm: string;
    phone: string;
    mobilePhone: string;
    zipCode: string;
    specialties: Specialty[]
}

export class DoctorRepository {
    
    repository = AppDataSource.getRepository(Doctor);
    
    async insert({name, crm, phone, mobilePhone, zipCode}: DoctorRequest): Promise<Doctor> {
        const doctor = this.repository.create({name, crm, phone, mobilePhone, zipCode})
        await this.repository.save(doctor);
        return doctor;
    }

    async select(){
        return this.repository.find()
    }

    async deleteByCrm(crm: string){
        return await this.repository.softDelete(crm);
    }

    // async selectByCrm({crm}: DoctorRequest){
    //     return this.repository.findOneBy({crm: crm});
    // }

}



