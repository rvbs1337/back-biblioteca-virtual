import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
    @PrimaryColumn({ name: 'cpf' })
    cpf: string

    @Column({ name: 'firstname' })
    firstName: string

    @Column({ name: 'lastname' })
    lastName: string

    @Column({ name: 'phonenumber' })
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