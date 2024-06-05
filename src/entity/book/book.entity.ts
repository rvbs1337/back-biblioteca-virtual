import { User } from "../user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum typeEnum {
    DONATE = 'donate',
    TRADE = 'trade'
}

export enum conditionEnum {
    NEW = 'new',
    USED = 'used'
}

@Entity({ name: 'book' })
export class Book {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    publisher: string

    @Column({
        type: 'enum',
        enum: conditionEnum
    })
    condition: conditionEnum

    @Column('text')
    image: string

    @Column('date')
    date: Date

    @Column({
        type: 'enum',
        enum: typeEnum
    })
    type: typeEnum

    @Column()
    state: string

    @Column()
    city: string

    @Column()
    @ManyToOne(() => User)
    @JoinColumn({ name: 'cpf' })
    cpf: User
}