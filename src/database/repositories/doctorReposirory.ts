import { AppDataSource } from "../data-source";
import { Doctor } from "../entities/doctor";

export const doctorRepository = AppDataSource.getRepository(Doctor);