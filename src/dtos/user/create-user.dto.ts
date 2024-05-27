export class CreateUserDTO {
    firstName: string
    lastName: string
    cpf: string
    phoneNumber: string
    date: string
    email: string
    password: string
    state: string
    city: string

    constructor(firstName: string, lastName: string, cpf: string, phoneNumber: string, date: string, email: string, password: string, state: string, city: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
        this.phoneNumber = phoneNumber;
        this.date = date;
        this.email = email;
        this.password = password;
        this.state = state;
        this.city = city;
    }
}