import { Router } from 'express'
import UserController from './src/entity/user/user.controller'
import authController from './src/entity/auth/auth.controller'
import bookController from './src/entity/book/book.controller'

const routes = Router()
routes.post('/usuarios/cadastro', UserController.create)

routes.post('/auth/login', authController.signIn);

routes.post('/book/donation', bookController.bookDonation)

routes.post('/book/request', bookController.bookRequest)

// routes.post('/usuario/:id', UserController.updateById)
// routes.get('/usuario', UserController.findAll)
// routes.get('/usuario/:id', UserController.findById)
// routes.delete('/usuario/:id', UserController.deleteById)

export {
    routes
}