export enum Errors {
    CPF_ALREADY_EXISTS = 'O cpf já está em uso',
    STATE_ERROR = 'Estado inválido',
    CITY_ERROR = 'Cidade inválida para o estado escolhido',
    EMAIL_ERROR = 'Email inválido',
    DATE_ERROR = 'Data inválida',
    CPF_ERROR = 'CPF Inválido',
    PHONE_NUMBER_ERROR = 'Número de celular inválido',
    NAME_OR_LASTNAME_ERROR = 'Nome ou sobrenome inválido',
    PASSWORD_LENGTH_ERROR = 'A senha deve conter pelo menos 8 dígitos',
    INVALID_EMAIL_ADDRESS_OR_PASSWORD = 'Email ou senha inválido',


    INTERNAL_ERROR = 'Erro interno do servidor',
}