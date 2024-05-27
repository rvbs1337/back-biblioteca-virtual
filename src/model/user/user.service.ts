import { CreateUserDTO } from "../../dtos/user/create-user.dto";
import userSchema from "./user.schema";
import { ValidateFields } from "../../utils/validate-fields";
import { ServiceData } from "../../utils/service-data";
import { HttpStatus } from "../../enums/http-status.enum";
import { Errors } from "../../enums/errors.enum";
import { FormatFields } from "../../utils/format-fields";

export class UserService {
    private readonly validate = new ValidateFields();
    private readonly format = new FormatFields();
    // async create(user: any) {
    //     if (user.password.lenght < 8) {
    //         return "A senha deve ter no minimo 8 digitos"
    //     }

    //     const createUser = userSchema.create(user)
    //     return "Usuario Cadastrado com Sucesso!"
    // }

    async create(createUserDto: CreateUserDTO) {
        if (!this.validate.validateEmptyString(createUserDto.firstName) || !this.validate.validateEmptyString(createUserDto.lastName)) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.NAME_OR_LASTNAME_ERROR
            )
        }

        if (!this.validate.validateCpf(createUserDto.cpf)) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.CPF_ERROR
            )
        }

        createUserDto.phoneNumber = this.format.formatPhoneNumber(createUserDto.phoneNumber);
        if (!this.validate.validatePhoneNumber(createUserDto.phoneNumber)) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.PHONE_NUMBER_ERROR
            )
        }

        if (!this.validate.validateDate(createUserDto.date)) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.DATE_ERROR
            )
        }

        if (!this.validate.validateEmail(createUserDto.email)) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.EMAIL_ERROR
            )
        }

        if (!this.validate.validatePassword(createUserDto.password)) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.PASSWORD_LENGTH_ERROR
            )
        }

        if (!this.validate.validateState(createUserDto.state)) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.STATE_ERROR
            )
        }

        //validar 
    }

    async findById(id: any) {
        const foundUser = await userSchema.findById(id)
        return foundUser
    }

    async findAll() {
        const foundUser = await userSchema.find()
        return foundUser
    }

    async updateById(id: any, user: any) {
        const foundUser = await userSchema.findByIdAndUpdate(id, user)
        return foundUser
    }

    async deleteById(id: any) {
        const deletedUser = await userSchema.findByIdAndDelete(id)
        return deletedUser
    }

    async checkLogin(user: any) {
        const foundUser = await userSchema.findOne({ email: user.email, password: user.password })

        if (foundUser) {
            return "ok"
        }
        return "Usuario não encontrado"
    }
}