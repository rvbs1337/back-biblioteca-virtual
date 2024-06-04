import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
    @PrimaryColumn()
    cpf: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    phoneNumber: string

    @Column("date")
    date: Date

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    state: string

    @Column()
    city: string
}