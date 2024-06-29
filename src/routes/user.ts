import express from 'express';
const routerUser = express.Router();
import { getUsers, addUser, updateUser } from '@/handler/user-handler';

routerUser.use('/get-user', getUsers);
routerUser.use('/add-user', addUser);
routerUser.use('/update-user/:id', updateUser);

export { routerUser };
