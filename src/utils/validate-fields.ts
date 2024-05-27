import { isDate, isEmail, isEmpty, isHexColor, isURL } from "validator";

export class ValidateFields {
    public validateEmail(email: string): boolean {
        if (typeof email !== 'string') { return false }
        return isEmail(email);
    }

    public validatePassword(password: string): boolean {
        if (typeof password === 'string') {
            if (password.length >= 8) {
                return true
            }
        }
        return false;
    }

    public validateDate(date: string): boolean {
        if (typeof date !== 'string') { return false }
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(date)) {
            return false;
        }

        const partesData = date.split('-');
        const ano = parseInt(partesData[0], 10);
        const mes = parseInt(partesData[1], 10) - 1;
        const dia = parseInt(partesData[2], 10);

        const dateObject = new Date(ano, mes, dia);

        console.log(dateObject)

        return dateObject.getFullYear() === ano &&
            dateObject.getMonth() === mes &&
            dateObject.getDate() === dia;

    }

    public validateUrl(url: string): boolean {
        if (typeof url !== 'string') { return false }
        return isURL(url);
    }

    public validateStatus(status: string): boolean {
        if (typeof status !== 'string') { return false }
        return ['pending', 'in-progress', 'completed'].includes(status);
    }

    public validateHexColor(hex: string): boolean {
        if (typeof hex !== 'string') { return false }
        return isHexColor(hex);
    }

    public validateEmptyString(string: string): boolean {
        if (typeof string !== 'string') {
            return !isEmpty(string);
        }

        return false
    }

    public validateCpf(value: string): boolean {
        if (typeof value !== "string") return false
        value = value.replace(/[\s.-]*/igm, '')
        if (
            !value ||
            value.length != 11 ||
            value == "00000000000" ||
            value == "11111111111" ||
            value == "22222222222" ||
            value == "33333333333" ||
            value == "44444444444" ||
            value == "55555555555" ||
            value == "66666666666" ||
            value == "77777777777" ||
            value == "88888888888" ||
            value == "99999999999"
        ) {
            return false
        }
        var soma = 0
        var resto
        for (var i = 1; i <= 9; i++)
            soma = soma + parseInt(value.substring(i - 1, i)) * (11 - i)
        resto = (soma * 10) % 11
        if ((resto == 10) || (resto == 11)) resto = 0
        if (resto != parseInt(value.substring(9, 10))) return false
        soma = 0
        for (var i = 1; i <= 10; i++)
            soma = soma + parseInt(value.substring(i - 1, i)) * (12 - i)
        resto = (soma * 10) % 11
        if ((resto == 10) || (resto == 11)) resto = 0
        if (resto != parseInt(value.substring(10, 11))) return false
        return true
    }

    public validatePhoneNumber(value: string) {
        if (typeof value === 'string') {
            if (value.length == 11) {
                return true;
            }
        }

        return false;
    }

    public validateState(value: string) {
        if (typeof value === 'string') { return false }
        let states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC']
        return states.includes(value);
    }
}