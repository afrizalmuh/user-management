import express from 'express';
const baseRouter = express.Router();

import { routerUser } from './user';

baseRouter.use('/user', routerUser);

export { baseRouter };
