import { Request, Response } from 'express';
import authService from './auth.service';


class AuthController {
    async signIn(req: Request, res: Response) {
        const result = await authService.signIn(req.body, res);
        console.log(result)
        return res.status(result.statusCode).send(result.metaData);
    }
}

export default new AuthController();