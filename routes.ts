import { Router } from 'express'
import UserController from './src/model/user/user.controller'

const routes = Router()
routes.post('/usuario/cadastro', UserController.create)
routes.post('/usuario/login', UserController.checkLogin)
// routes.post('/usuario/:id', UserController.updateById)
// routes.get('/usuario', UserController.findAll)
// routes.get('/usuario/:id', UserController.findById)
// routes.delete('/usuario/:id', UserController.deleteById)

export{
    routes
}