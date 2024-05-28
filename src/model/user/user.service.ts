import { CreateUserDTO } from "../../dtos/user/create-user.dto";
import userModel from "./user.schema";
import { ValidateFields } from "../../utils/validate-fields";
import { ServiceData } from "../../utils/service-data";
import { HttpStatus } from "../../enums/http-status.enum";
import { Errors } from "../../enums/errors.enum";
import { FormatFields } from "../../utils/format-fields";
import { User } from "../../interface/user.interface";
import { Hash } from "../../utils/hash";

class UserService {
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

        const hash = new Hash();

        if (!this.validate.validateEmptyString(createUserDto.firstName) || !this.validate.validateEmptyString(createUserDto.lastName)) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.NAME_OR_LASTNAME_ERROR
            )
        }

        createUserDto.cpf = this.format.onlyNumbers(createUserDto.cpf);
        if (!this.validate.validateCpf(createUserDto.cpf)) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.CPF_ERROR
            )
        }

        const exists: User | null = await userModel.findOne({ cpf: createUserDto.cpf });

        if (exists !== null) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.CPF_ALREADY_EXISTS
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
        createUserDto.password = await hash.encode(createUserDto.password);

        if (!this.validate.validateState(createUserDto.state)) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.STATE_ERROR
            )
        }

        try {
            const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${createUserDto.state}/municipios`);
            const cities = await res.json();
            if (cities.findIndex((el: any) => el.id == createUserDto.city) == -1) {
                return new ServiceData(
                    HttpStatus.BAD_REQUEST,
                    Errors.CITY_ERROR
                )
            }
        } catch (error) {
            console.error(error);
            return new ServiceData(
                HttpStatus.INTERNAL_SERVER_ERROR,
                Errors.INTERNAL_ERROR
            )
        }

        return userModel.create(createUserDto)
            .then(() => {
                return new ServiceData(
                    HttpStatus.CREATED
                )
            })
            .catch(() => {
                return new ServiceData(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    Errors.INTERNAL_ERROR
                )
            })

    }

    async findById(id: any) {
        const foundUser = await userModel.findById(id)
        return foundUser
    }

    async findAll() {
        const foundUser = await userModel.find()
        return foundUser
    }

    async updateById(id: any, user: any) {
        const foundUser = await userModel.findByIdAndUpdate(id, user)
        return foundUser
    }

    async deleteById(id: any) {
        const deletedUser = await userModel.findByIdAndDelete(id)
        return deletedUser
    }

    async checkLogin(user: any) {
        const foundUser = await userModel.findOne({ email: user.email, password: user.password })

        if (foundUser) {
            return "ok"
        }
        return "Usuario não encontrado"
    }
}

export default new UserService();