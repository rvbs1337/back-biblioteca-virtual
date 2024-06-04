import { User } from "../entity/user/user.entity";
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "kds123",
    database: "biblioteca",
    schema: "public",
    entities: [User],
    logging: true,
    subscribers: [],
    migrations: [],
});