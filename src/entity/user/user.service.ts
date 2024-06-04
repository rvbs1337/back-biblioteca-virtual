import { CreateUserDTO } from "../../dtos/user/create-user.dto";
import { ValidateFields } from "../../utils/validate-fields";
import { ServiceData } from "../../utils/service-data";
import { HttpStatus } from "../../enums/http-status.enum";
import { Errors } from "../../enums/errors.enum";
import { FormatFields } from "../../utils/format-fields";
import { Hash } from "../../utils/hash";
import { AppDataSource } from "../../datasource/data-source";
import { User } from "./user.entity";


class UserService {
    private readonly validate = new ValidateFields();
    private readonly format = new FormatFields();
    private userRepository = AppDataSource.getRepository(User);

    async create(createUserDto: CreateUserDTO) {

        const hash = new Hash();

        createUserDto.cpf = this.format.onlyNumbers(createUserDto.cpf);
        if (!this.validate.validateCpf(createUserDto.cpf)) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.CPF_ERROR
            )
        }

        const exists: User | null = await this.userRepository.findOneBy({ cpf: createUserDto.cpf });

        if (exists !== null) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.CPF_ALREADY_EXISTS
            )
        }

        createUserDto.phoneNumber = this.format.formatPhoneNumber(createUserDto.phoneNumber);

        if (!this.validate.validateDate(createUserDto.date)) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.DATE_ERROR
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

        return this.userRepository.save(createUserDto)
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

    async findByCPF(cpf: string) {
        const foundUser = await this.userRepository.findOneBy({ cpf: cpf })
        return foundUser
    }

    async findAll() {
        const foundUser = await this.userRepository.find();
        return foundUser
    }
}

export default new UserService();