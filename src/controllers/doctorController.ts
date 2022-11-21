import { Request, response, Response } from "express";
import { get } from "http";
import { AppDataSource } from "../database";
import { Doctor } from "../database/entities/doctor";
import { DoctorRepository } from "../database/repositories/doctorRepository";

export class DoctorController {


    async create(req: Request, res: Response){
        try{
            const {name, crm, phone, mobilePhone, zipCode, specialties} = req.body;
            const doctor = new DoctorRepository();
            const result = await doctor.insert({name, crm, phone, mobilePhone, zipCode, specialties});

            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async read(req: Request, res: Response) {
        try {
            const doctor = new DoctorRepository();
            const result = await doctor.select();

            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async readByCrm(req: Request, res: Response) {
        try{
            const {crm} = req.params;
            const doctor = new DoctorRepository();
            const result = await doctor.selectByCrm(crm);

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { crm, phone, mobilePhone, zipCode, specialties } = req.body;
            const doctor = new DoctorRepository();
            const result = await doctor.updateByCrm({ crm, phone, mobilePhone, zipCode, specialties });

            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async deleteByCrm(req: Request, res: Response) {
        try {
            const {crm} = req.params
            const doctor = new DoctorRepository();
            const result = await doctor.deleteByCrm(crm)

            return res.status(204).json(result)
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}