import { validate } from "class-validator";
import { DoctorRepository } from "../database/repositories/doctorRepository";
import { DoctorDto } from "../dtos/doctorDto";



export class CreateDoctorService {
    doctorRepository = new DoctorRepository();

    async checkIfCrmIsRegistered({name, crm, phone, mobilePhone, zipCode, specialties}: DoctorDto) {
        const doctor = new DoctorDto(name, crm, phone, mobilePhone, zipCode, specialties);
        const errors = await validate(doctor);
        if (errors.length > 0) {
            return {message : errors}
        }

        const checkCrm = await this.doctorRepository.selectByCrm(crm);

        if (checkCrm) {
            return {message: "Doctor already registered!"}
        }

        return doctor;
        
    }
}