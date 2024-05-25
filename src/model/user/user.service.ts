import userSchema from "./user.schema";

export class UserService{
    async create(user: any){
        if(user.password.lenght < 8){            
            return "A senha deve ter no minimo 8 digitos"
        }

        const createUser = userSchema.create(user)
        return "Usuario Cadastrado com Sucesso!"
    }

    async findById(id: any){
        const foundUser = await userSchema.findById(id)
        return foundUser
    }

    async findAll(){
        const foundUser = await userSchema.find()
        return foundUser
    }

    async updateById(id: any, user: any){
        const foundUser = await userSchema.findByIdAndUpdate(id, user)
        return foundUser
    }

    async deleteById(id: any){
        const deletedUser = await userSchema.findByIdAndDelete(id)
        return deletedUser
    }

    async checkLogin(user: any){
        const foundUser = await userSchema.findOne({email: user.email, password: user.password})

        if(foundUser){
            return "ok"
        }
        return "Usuario não encontrado"
    }
}