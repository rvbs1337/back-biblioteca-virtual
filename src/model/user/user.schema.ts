import { Document, Schema, model } from 'mongoose'
import { User } from 'src/interface/user.interface'

export type UserDocument = User & Document;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'firstName']
    },
    lastName: {
        type: String,
        required: [true, 'lastName']
    },
    cpf: {
        type: String,
        required: [true, 'cpf']
    },
    phoneNumber: {
        type: String,
        required: [true, 'phoneNumber']
    },
    date: {
        type: Date,
        required: [true, 'date']
    },
    email: {
        type: String,
        required: [true, 'email']
    },
    password: {
        type: String,
        required: [true, 'password']
    },
    state: {
        type: String,
        required: [true, 'state'],
        enum: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC']
    },
    city: {
        type: String,
        required: [true, 'city'],
    }
}, {
    timestamps: true,
})

export default model<UserDocument>("User", userSchema);