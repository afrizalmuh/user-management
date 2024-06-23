import express from 'express';
const routerUser = express.Router();
import { getUsers } from '@/handler/user-handler';

routerUser.use('/get-user', getUsers);

export { routerUser };
