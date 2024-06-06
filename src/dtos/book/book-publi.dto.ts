import { IsBoolean, IsEnum, IsOptional, IsString, MinLength } from "class-validator"
import { conditionEnum, typeEnum } from "../../entity/book/book.entity"
import { User } from "../../entity/user/user.entity"

export class BookPubliDTO {
    @IsString()
    @MinLength(1)
    title: string

    @IsString()
    @MinLength(1)
    author: string

    @IsString()
    @MinLength(1)
    publisher: string

    @IsEnum(conditionEnum)
    condition: conditionEnum

    @IsString()
    @MinLength(1)
    image: string

    @IsString()
    @IsOptional()
    date: string

    @IsEnum(typeEnum)
    type: typeEnum

    @IsString()
    @IsOptional()
    state: string

    @IsString()
    @IsOptional()
    cityId: string

    @IsString()
    @IsOptional()
    cityName: string

    @IsBoolean()
    @IsOptional()
    active: boolean

    @IsString()
    @IsOptional()
    cpf: any

    constructor(data: { title: string, author: string, publisher: string, condition: conditionEnum, image: string, type: typeEnum }) {
        this.title = data.title;
        this.author = data.author;
        this.publisher = data.publisher;
        this.condition = data.condition;
        this.image = data.image;
        this.type = data.type;
    }
}