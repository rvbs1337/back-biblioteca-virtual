import { Request, Response } from "express";
import { UserSignInDto } from "../../dtos/user/user-signin";
import { Errors } from "../../enums/errors.enum";
import { HttpStatus } from "../../enums/http-status.enum";
import userModel from '../../model/user/user.schema'
import { Hash } from "../../utils/hash";
import { Jwt } from "../../utils/jwt";
import { ServiceData } from "../../utils/service-data";
import { Messages } from "../../enums/messages.enum";
import { ValidateFields } from "../../utils/validate-fields";
import { User } from "../../interface/user.interface";

class AuthService {
    private validateFields = new ValidateFields();


    async signIn(userSignIn: UserSignInDto, res: Response) {
        if (!this.validateFields.validateEmail(userSignIn.email) || !this.validateFields.validatePassword(userSignIn.password)) {
            return new ServiceData(HttpStatus.BAD_REQUEST, Errors.INVALID_EMAIL_ADDRESS_OR_PASSWORD);
        }

        const user: User | null = await userModel.findOne({ email: userSignIn.email });
        let accessToken: string;

        if (user === null) {
            return new ServiceData(
                HttpStatus.BAD_REQUEST,
                Errors.INVALID_EMAIL_ADDRESS_OR_PASSWORD
            )
        }

        const hash = new Hash();
        const result = await hash.compare(userSignIn.password, user.password);

        if (result) {
            const jwt = new Jwt();
            accessToken = jwt.generateAccessToken(user._id, user.firstName);
            console.log(accessToken)
        } else {
            return new ServiceData(HttpStatus.UNAUTHORIZED);
        }

        return new ServiceData(HttpStatus.OK, Messages.LOGIN_SUCCESSFULLY, { name: user.firstName, accessToken: accessToken })
    }
}

export default new AuthService();