import * as express from "express";
import { routes } from "./routes";
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import { AppDataSource } from "./src/datasource/data-source";
import { SetupSQL } from "./src/sql/setup.sql";

const corsOptions = {
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
};

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }

    private middleware(): void {
        this.express.use(express.json());
        this.express.use(cors(corsOptions));
        this.express.use(cookieParser());
    }

    private async database() {
        AppDataSource.initialize()
            .then(() => {
                const sql = new SetupSQL();
                sql.executeSQLs(AppDataSource);
                console.log("conectou na granja")
            })
            .catch((error) => console.error("NAO CONECTOU NA FRANGAIADA", error))
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express