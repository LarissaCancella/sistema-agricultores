import express, { Application } from 'express';
import cors from 'cors';
import routesAgricultores from '../routes/agricultor';
import db from '../db/connection';

class Server {
    private app: express.Application;
    private port : string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT ?? '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicação rodando na porta ${this.port}`)
        })
    }

    routes() {
        this.app.use('/agricultores', routesAgricultores)
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await db.authenticate();
            console.log("Banco de dados conectado")
        } catch (error) {
            console.log("Erro ao conectar com o banco de dados")
            console.log(error)
        }
        
    }
}

export default Server;