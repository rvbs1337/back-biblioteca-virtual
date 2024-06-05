import * as jwt from 'jsonwebtoken';
const jwtSecret = "353f94b9-db25-46da-a553-96fa31dd8d50";

export class Jwt {
    public generateAccessToken(id: string, username: string): string {
        const payload = {
            id: id,
            userName: username
        }

        const secret = jwtSecret;

        const accessToken = jwt.sign(
            payload,
            secret,
            { expiresIn: '1d' }
        )

        return accessToken;
    }

    public verify(token: string, secret: string, callback: (err: any, decode: any) => any): any {
        return jwt.verify(
            token,
            secret,
            (err, decode) => {
                callback(err, decode);
            }
        )
    }

}
