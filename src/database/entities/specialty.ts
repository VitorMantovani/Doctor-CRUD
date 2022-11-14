import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Doctor } from "./doctor";

@Entity("tb_specialty")
export class Specialty {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @ManyToOne(() => Doctor, doctor => doctor.specialty)
    @JoinColumn()
    doctors: Doctor;
}


