import { AppDataSource } from "..";
import { DoctorDto } from "../../dtos/doctorDto";
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

type DoctorUpdateRequest = {
    crm: string;
    phone: string;
    mobilePhone: string;
    zipCode: string;
    specialties: Specialty[]
}



export class DoctorRepository {
    
    repository = AppDataSource.getRepository(Doctor);
    
    async insert({name, crm, phone, mobilePhone, zipCode, specialties}: DoctorRequest): Promise<Doctor> {
        const doctor = this.repository.create({name, crm, phone, mobilePhone, zipCode,specialties})
        await this.repository.save(doctor);
        return doctor;
    }

    async select(){
        return this.repository.find()
    }

    async deleteByCrm(crm: string){
        return await this.repository.softDelete(crm);
    }

    async updateByCrm({crm, phone, mobilePhone, zipCode, specialties}: DoctorUpdateRequest) {
        return await this.repository
        .createQueryBuilder()
        .update(Doctor)
        .set({phone: phone, mobilePhone: mobilePhone, zipCode: zipCode, specialties: specialties})
        .where("crm = :crm", { crm: crm})
        .execute()
    }


}



