import { BookDonationDTO } from "../../dtos/book/book-donation.dto"
import { ServiceData } from "../../utils/service-data";
import { HttpStatus } from "../../enums/http-status.enum";
import { Errors } from "../../enums/errors.enum";
import { BookRequestDTO } from "../../dtos/book/book-request.dto";
import { AppDataSource } from "../../datasource/data-source";
import { Book } from "./book.entity";
import { BookPubliDTO } from "../../dtos/book/book-publi.dto";
import { User } from "../../entity/user/user.entity";

class BookService {
    private bookRepository = AppDataSource.getRepository(Book)
    private userRepository = AppDataSource.getRepository(User)

    async createBookPubli(userId: string, bookPubli: BookPubliDTO) {
        try {
            const user = await this.userRepository.findOneBy({ cpf: userId });

            if (user == null) {
                return new ServiceData(
                    HttpStatus.BAD_REQUEST
                )
            }

            bookPubli.date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
            bookPubli.state = user.state;
            bookPubli.city = user.city;
            bookPubli.user = user;

            const bookPubliSave = this.bookRepository.create(bookPubli);

            return this.bookRepository.save(bookPubliSave)
                .then(() => {
                    return new ServiceData(
                        HttpStatus.CREATED
                    )
                })
                .catch((error) => {
                    console.error(error);
                    return new ServiceData(
                        HttpStatus.BAD_REQUEST
                    )
                })
        } catch (error) {
            console.error(error);
            return new ServiceData(
                HttpStatus.BAD_REQUEST
            )
        }
    }

    // async bookDonation(bookDonationDto: BookDonationDTO) {

    //     return this.bookRepository.save(bookDonationDto)
    //         .then(() => {
    //             return new ServiceData(
    //                 HttpStatus.CREATED
    //             )
    //         })
    //         .catch(() => {
    //             return new ServiceData(
    //                 HttpStatus.INTERNAL_SERVER_ERROR,
    //                 Errors.INTERNAL_ERROR
    //             )
    //         })
    // }

    // async bookRequest(bookRequestDto: BookRequestDTO) {

    //     return bookSchema.create(bookRequestDto)
    //         .then(() => {
    //             return new ServiceData(
    //                 HttpStatus.CREATED
    //             )
    //         })
    //         .catch(() => {
    //             return new ServiceData(
    //                 HttpStatus.INTERNAL_SERVER_ERROR,
    //                 Errors.INTERNAL_ERROR
    //             )
    //         })
    // }
}

export default new BookService()