import { Book } from "../entity/book/book.entity";
import { User } from "../entity/user/user.entity";
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "kdsteste",
    database: "biblioteca",
    schema: "public",
    entities: [User, Book],
    // logging: true,
    subscribers: [],
    migrations: [],
});