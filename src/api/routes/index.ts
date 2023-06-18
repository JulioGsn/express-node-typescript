import { Router, Request, Response } from 'express';
import { UserController } from './../controllers';

const r = Router();

r.get('/users', UserController.index);

export default r;
