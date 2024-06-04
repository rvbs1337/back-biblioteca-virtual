import { Book } from "interface/book.interface";
import { Document, Schema, model } from "mongoose";

export type BookDocument = Book & Document;

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title']
    },
    author: {
        type: String,
        required: [true, 'author']
    },
    publisher: {
        type: String,
        required: [true, 'publisher']
    },
    condition: {
        type: String,
        required: [true, 'condition'],
        enum: ['NOVO', 'USADO']
    },
    image: {
        type: String,
        required: [true, 'image']
    },
    date: {
        type: Date,
        required: [true, 'date']
    },
    email: {
        type: String,
        required: [true, 'email']
    },
    type: {
        type: String,
        required: [true, 'type'],
        enum: ['DONATION', 'REQUEST']
    }
}, {
    timestamps: true,
})

export default model<BookDocument>("Book", bookSchema)