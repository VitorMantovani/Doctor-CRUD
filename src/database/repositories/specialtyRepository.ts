import { AppDataSource } from "..";
import { Specialty } from "../entities/specialty";

type SpecialtyRequest = {
    name: string;
}

export class SpecialtyRepository {
    repository = AppDataSource.getRepository(Specialty)

    async insert({name}: SpecialtyRequest): Promise<Specialty> {
        const specialty = this.repository.create({name});
        await this.repository.save(specialty);
        return specialty; 
    }
}