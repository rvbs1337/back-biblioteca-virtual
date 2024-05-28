export class FormatFields {
    public dateToString(date: Date) {
        let convert = new Date(date);
        return convert.toISOString().split('T')[0];
    }

    public formatPhoneNumber(value: string) {
        return value.replace(/\D/g, '');
    }

    public onlyNumbers(value: string) {
        return value.replace(/\D/g, '');
    }
}