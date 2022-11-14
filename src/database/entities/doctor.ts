import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Specialty } from "./specialty";

@Entity("tb_doctor")
export class Doctor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
     name: string;

     @Column()
     crm: string;
     
     @Column()
     phone: string;
     
     @Column({name: "mobile_phone"})
     mobilePhone: string;
     
     @Column({name: "zip_code"})
    zipCode: string;

    @OneToMany(() => Specialty, room => room.doctors)
    @JoinColumn({name: "specialty_id"})
    specialty: Specialty[];
     
}
