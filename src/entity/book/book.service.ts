import { BookDonationDTO } from "../../dtos/book/book-donation.dto"
import { ServiceData } from "../../utils/service-data";
import { HttpStatus } from "../../enums/http-status.enum";
import { Errors } from "../../enums/errors.enum";
import { BookRequestDTO } from "../../dtos/book/book-request.dto";
import { AppDataSource } from "datasource/data-source";
import { Book } from "./book.entity";

class BookService {
    private bookRepository = AppDataSource.getRepository(Book)

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