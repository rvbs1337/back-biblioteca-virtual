import { Router } from 'express'
import UserController from './src/model/user/user.controller'
import authController from 'src/model/auth/auth.controller'

const routes = Router()
routes.post('/usuario/cadastro', UserController.create)
// routes.post('/usuario/login', UserController.checkLogin)

routes.post('/auth/login', authController.signIn);



// routes.post('/usuario/:id', UserController.updateById)
// routes.get('/usuario', UserController.findAll)
// routes.get('/usuario/:id', UserController.findById)
// routes.delete('/usuario/:id', UserController.deleteById)

export {
    routes
}