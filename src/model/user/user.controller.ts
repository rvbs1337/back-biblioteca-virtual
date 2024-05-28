import { Request, Response } from 'express'
import userService from './user.service'

class UserController {

    async create(req: Request, res: Response) {
        const response = await userService.create(req.body)
        return res.status(response.statusCode).send(response.metaData)
    }

    async findById(req: Request, res: Response) {
        const user = await userService.findById(req.params.id)
        return res.json(user)
    }

    async findAll(req: Request, res: Response) {
        const user = await userService.findAll()
        return res.json(user)
    }

    async updateById(req: Request, res: Response) {
        const user = await userService.updateById(req.params.id, req.body)
        return res.json(user)
    }

    async deleteById(req: Request, res: Response) {
        const user = await userService.deleteById(req.params.id)
        return res.json(user)
    }

    async checkLogin(req: Request, res: Response) {
        const user = await userService.checkLogin(req.body)
        return res.json(user)
    }
}

export default new UserController()