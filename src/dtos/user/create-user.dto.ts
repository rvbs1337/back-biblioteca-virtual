import { IsDateString, IsEmail, IsString, Length, MinLength } from "class-validator"

export class CreateUserDTO {

    @IsString()
    @MinLength(3)
    firstName: string;

    @MinLength(3)
    @IsString()
    lastName: string;

    @IsString()
    @Length(14, 14)
    cpf: string;

    @IsString()
    @Length(16, 16)
    phoneNumber: string;

    @IsDateString()
    date: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(10)
    password: string;

    @IsString()
    state: string;

    @IsString()
    city: string;

    constructor(data: { firstName: string, lastName: string, cpf: string, phoneNumber: string, date: string, email: string, password: string, state: string, city: string }) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.cpf = data.cpf;
        this.phoneNumber = data.phoneNumber;
        this.date = data.date;
        this.email = data.email;
        this.password = data.password;
        this.state = data.state;
        this.city = data.city;
    }
}