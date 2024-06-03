export class BookDonationDTO {
    title: string;
    author: string;
    publisher: string;
    condition: string;
    image: string;
    date: string;
    email: string;
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