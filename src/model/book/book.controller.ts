import { Request, Response } from "express"
import bookService from "./book.service"
import { BookDonationDTO } from "src/dtos/book/book-donation.dto"
import { validate } from "class-validator";
import { HttpStatus } from "src/enums/http-status.enum";
import { BookRequestDTO } from "src/dtos/book/book-request.dto";

class BookController{

    async bookDonation(req: Request, res: Response){
        const newBook = new BookDonationDTO(req.body);
        return validate(newBook).then(async (errors) =>{
            if(errors.length > 0){
                console.log(errors)
                return res.status(HttpStatus.BAD_REQUEST).send('Bad Request');
            }else {
                const response = await bookService.bookDonation(newBook)
                return res.status(response.statusCode).send(response.metaData)
            }
        })
    }

    async bookRequest(req: Request, res: Response){
        const newBook = new BookRequestDTO(req.body);
        return validate(newBook).then(async (errors) =>{
            if(errors.length > 0){
                console.log(errors)
                return res.status(HttpStatus.BAD_REQUEST).send('Bad Request');
            }else {
                const response = await bookService.bookRequest(newBook)
                return res.status(response.statusCode).send(response.metaData)
            }
        })
    }

}

export default new BookController()