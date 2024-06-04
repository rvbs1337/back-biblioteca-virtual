import { User } from "../user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    condition: string

    @Column('text')
    image: string

    @Column('date')
    date: Date

    @Column()
    type: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'cpf' })
    user: User
}