import express from "express";
import mongoose from "mongoose";
import { routes } from "./routes";
import cors from 'cors';
import cookieParser from 'cookie-parser';

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
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect("mongodb://0.0.0.0:27017/biblioteca")
            console.log("conectou na granja")
        } catch (error) {
            console.error("NAO CONECTOU NA FRANGAIADA", error)
        }
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express