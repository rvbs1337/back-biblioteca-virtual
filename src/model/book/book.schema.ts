import { Document,Schema,model } from "mongoose";
import { Book } from "src/interface/book.interface";

export type BookDocument = Book & Document;

const bookSchema =  new Schema({
    title:{
        type: String,
        required: [true, 'title']
    },
    author:{
        type: String,
        required: [true, 'author']
    },
    condition:{
        type: String,
        required: [true, 'condition'],
        enum: ['NOVO', 'USADO']
    },
    image:{
        type: String,
        required: [true, 'image']
    },
    date:{
        type: Date,
        required: [true, 'date']
    },
    email:{
        type: String,
        required: [true, 'email']
    },
},{
    timestamps: true,
})

export default model<BookDocument>("Book", bookSchema)