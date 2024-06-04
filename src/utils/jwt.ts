import * as jwt from 'jsonwebtoken';
const jwtSecret = 'skgofygqifty3yt37iytg73gt792gt7';

export class Jwt {
    public generateAccessToken(_id: string, username: string): string {
        const payload = {
            _id: _id,
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
