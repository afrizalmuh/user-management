import express from 'express';
const routerUser = express.Router();
import { getUsers } from '@/handler/user-handler';

routerUser.use('/get-product', getUsers);

export { routerUser };
