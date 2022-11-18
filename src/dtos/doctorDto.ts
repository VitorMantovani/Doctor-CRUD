import { IsArray, IsMobilePhone, IsNotEmpty, isNumberString, IsNumberString, MaxLength, MinLength } from "class-validator";
import { Specialty } from "../database/entities/specialty";

export class DoctorDto {
    @IsNotEmpty()
    @MaxLength(120)
    name: string;

    @IsNotEmpty()
    @MaxLength(7)
    crm: string;

    @IsNotEmpty()
    @IsNumberString()
    phone: string;

    @IsNotEmpty()
    @IsNumberString()
    mobilePhone: string;

    @IsNotEmpty()
    zipCode: string;

    @IsNotEmpty()
    @IsArray()
    @MinLength(2)
    specialties: Specialty[];
}