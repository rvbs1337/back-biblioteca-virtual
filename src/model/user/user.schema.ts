import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    cpf: String,
    phoneNumber: String,
    date: Date,
    email: String,
    password: String,
},{
    timestamps: true,
})

export default model("User", userSchema)