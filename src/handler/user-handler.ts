import { Request, Response } from 'express';
import UserService from '@/service/user-service';
import UserRepository from '@/repository/user-repository';
import { ResponseSuccess } from '@/utils/response';

const userService = () => {
  const userRepository = UserRepository.createInstance();
  const userSerice = UserService.createInstance(userRepository);
  return userSerice
}

const getUsers = async (req: Request, res: Response) => {
  try {
    const userServices = userService()

    const user = await userServices.getUser();
    return ResponseSuccess(res, {
      data: user,
      message: 'ok',
      statusCode: 200,
    });
  } catch (err) {
    console.log(err);
  }
};

const addUser = async (req: Request, res: Response) => {
  try {
    const userServices = userService()

    const user = await userServices.addUser(req.body);

    return ResponseSuccess(res, {
      data: user,
      message: 'ok',
      statusCode: 200,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userServices = userService()
    console.log(req.params)
    const payload = {...req.body, user_id:req.params.id, updated_at_users:new Date()}
    console.log(payload)
    const user = await userServices.updateUser(payload);

  return ResponseSuccess(res, {
      data: user,
      message: 'ok',
      statusCode: 200,
    });
  } 
  
  catch (err) {
    console.log(err);
  }
};

export { getUsers, addUser, updateUser };
