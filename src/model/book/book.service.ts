import { Book } from "src/interface/book.interface"
import bookSchema from "./book.schema"
import { BookDonationDTO } from "src/dtos/book/book-donation.dto"
import { ServiceData } from "src/utils/service-data";
import { HttpStatus } from "src/enums/http-status.enum";
import { Errors } from "src/enums/errors.enum";

class BookService {
    async bookDonation(bookDonatioDto: BookDonationDTO) {

        return bookSchema.create(bookDonatioDto)
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
}

export default new BookService()