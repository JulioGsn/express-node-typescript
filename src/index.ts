import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './api/routes';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT;

const server: Express = express();

server.use(cors());
server.use(routes);

server.listen(port, () => {
    console.log('[SERVER] Running on PORT ' + port);
});
