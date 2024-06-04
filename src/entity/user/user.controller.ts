import { Request, Response } from 'express'
import userService from './user.service'
import { CreateUserDTO } from '../../dtos/user/create-user.dto';
import { HttpStatus } from '../../enums/http-status.enum';
import { validate } from 'class-validator';

class UserController {

    async create(req: Request, res: Response) {
        const newUser = new CreateUserDTO(req.body)
        return validate(newUser).then(async (errors) => {
            if (errors.length > 0) {
                console.log(errors)
                return res.status(HttpStatus.BAD_REQUEST).send('Bad Request');
            } else {
                const response = await userService.create(newUser);
                return res.status(response.statusCode).send(response.metaData)
            }
        })
    }

    async findById(req: Request, res: Response) {
        const user = await userService.findByCPF(req.params.id)
        return res.json(user)
    }

    async findAll(req: Request, res: Response) {
        const user = await userService.findAll()
        return res.json(user)
    }
}

export default new UserController()