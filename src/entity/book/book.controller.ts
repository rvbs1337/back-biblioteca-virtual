import { Request, Response } from "express"
import bookService from "./book.service"
import { BookDonationDTO } from "../../dtos/book/book-donation.dto"
import { validate } from "class-validator";
import { HttpStatus } from "../../enums/http-status.enum";
import { BookRequestDTO } from "../../dtos/book/book-request.dto";
import { BookPubliDTO } from "../../dtos/book/book-publi.dto";

class BookController {

    async createBookPubli(req: Request, res: Response) {
        const newBookPubli = new BookPubliDTO(req.body);
        return validate(newBookPubli).then(async (errors) => {
            if (errors.length > 0) {
                console.log(errors)
                return res.status(HttpStatus.BAD_REQUEST).send('Bad Request');
            } else {
                const response = await bookService.createBookPubli(req.user.id, newBookPubli);
                return res.status(response.statusCode).send(response.metaData)
            }
        })
    }

    async getBookPublis(req: Request, res: Response) {
        console.log(req)
        try {


            const uf = req.query.uf
            const city = req.query.city
            const type = req.query.type

            const response = await bookService.getBookPublis(String(uf), String(city), String(type));
            return res.status(response.statusCode).send(response.metaData);
        } catch (error) {
            return res.status(500);
        }
    }

    async getContacAtPubli(req: Request, res: Response) {
        try {
            const publiId = req.params.id;
            const response = await bookService.getContactAtPubli(publiId);
            return res.status(response.statusCode).send(response.metaData)
        } catch (error) {
            return res.status(500);
        }
    }

    // async bookDonation(req: Request, res: Response) {
    //     const newBook = new BookDonationDTO(req.body);
    //     return validate(newBook).then(async (errors) => {
    //         if (errors.length > 0) {
    //             console.log(errors)
    //             return res.status(HttpStatus.BAD_REQUEST).send('Bad Request');
    //         } else {
    //             const response = await bookService.bookDonation(newBook)
    //             return res.status(response.statusCode).send(response.metaData)
    //         }
    //     })
    // }

    // async bookRequest(req: Request, res: Response) {
    //     const newBook = new BookRequestDTO(req.body);
    //     return validate(newBook).then(async (errors) => {
    //         if (errors.length > 0) {
    //             console.log(errors)
    //             return res.status(HttpStatus.BAD_REQUEST).send('Bad Request');
    //         } else {
    //             const response = await bookService.bookRequest(newBook)
    //             return res.status(response.statusCode).send(response.metaData)
    //         }
    //     })
    // }

}

export default new BookController()