import express from 'express';
const routerUser = express.Router();
import { getUsers, addUser, updateUser, deleteUser, getOneUser } from '@/handler/user-handler';

routerUser.use('/get-user/:id', getOneUser);
routerUser.use('/update-user/:id', updateUser);
routerUser.use('/delete-user/:id', deleteUser);
routerUser.use('/get-user', getUsers);
routerUser.use('/add-user', addUser);

export { routerUser };
