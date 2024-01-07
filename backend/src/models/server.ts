import express, { Application, Request, Response } from "express";
import routerProduct from '../routes/productRouter';
import db from '../db/connection';

class Server {

      private app: Application;
      private port: string;

      constructor() {
            this.app = express();
            this.port = process.env.PORT || '3001';
            this.listen();
            this.middlewares();
            this.routes();
            this.dbConnect();
      };

      listen() {
            this.app.listen(this.port, () => {
                  console.log(`ervidor rodando na porta http://localhost:${this.port}/`);
            })
      };

      middlewares() {
            this.app.use(express.json());
      };
      
      routes() {
            this.app.get('/', (req: Request, res: Response) => {
                  res.json({
                        msg: "Api Online."
                  })
            });

            this.app.use("/api/produtos", routerProduct);
      };

      async dbConnect() {
            await db.authenticate();
            console.log('Conexão com o banco de dados realizada com sucesso!');
      };
}

export default Server;