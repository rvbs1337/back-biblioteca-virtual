import { NextFunction, Request, Response } from "express";
import { Jwt } from "../utils/jwt";
import { HttpStatus } from "../enums/http-status.enum";
import { AppDataSource } from "../datasource/data-source";
import { User } from "../entity/user/user.entity";

const secret = "353f94b9-db25-46da-a553-96fa31dd8d50";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User)

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.sendStatus(HttpStatus.UNAUTHORIZED);
        return;
    }

    const token = authHeader.split(' ')[1];
    const jwt = new Jwt();


    jwt.verify(token, secret, async (err, decode) => {
        if (err) {
            return res.sendStatus(HttpStatus.FORBIDDEN);
        }

        const userId = decode.id;
        console.log(userId)

        if (!userId) {
            return res.sendStatus(HttpStatus.FORBIDDEN);
        }

        const user: User | null = await userRepository.findOneBy({ cpf: userId });

        if (user) {
            req.user = { id: userId };
            next();
        } else {
            return res.sendStatus(HttpStatus.UNAUTHORIZED);
        }
    });
};