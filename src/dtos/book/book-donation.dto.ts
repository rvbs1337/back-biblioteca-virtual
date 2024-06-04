import { IsString } from "class-validator";

export class BookDonationDTO {

    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsString()
    publisher: string;

    @IsString()
    condition: string;

    @IsString()
    image: string;

    @IsString()
    date: string;

    @IsString()
    email: string;

    @IsString()
    type: string;

    constructor(data: {
        title: string,
        author: string,
        publisher: string,
        condition: string,
        image: string,
        date: string,
        email: string,
        type: string
    }) {
        this.title = data.title;
        this.author = data.author;
        this.publisher = data.publisher;
        this.condition = data.condition;
        this.image = data.image;
        this.date = data.date;
        this.email = data.email;
        this.type = data.type;
    }
}