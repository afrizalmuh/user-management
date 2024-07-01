import { Request, Response } from 'express';
import UserService from '@/service/user-service';
import UserRepository from '@/repository/user-repository';
import { ResponseSuccess } from '@/utils/response';
import { ErrorHandle } from '@/utils/error-helper';

const userService = () => {
  const userRepository = UserRepository.createInstance();
  const userSerice = UserService.createInstance(userRepository);
  return userSerice;
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const userServices = userService();

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

const getOneUser = async (req: Request, res: Response) => {
  try {
    const userServices = userService();
    const payload = Number(req.params.id);
    const user = await userServices.getOneUser(payload);
    return ResponseSuccess(res, {
      data: user,
      message: 'ok',
      statusCode: 200,
    });
  } catch (error) {
    return ErrorHandle(res, error);
  }
};

const addUser = async (req: Request, res: Response) => {
  try {
    const userServices = userService();

    const user = await userServices.addUser(req.body);

    return ResponseSuccess(res, {
      data: user,
      message: 'ok',
      statusCode: 200,
    });
  } catch (error) {
    return ErrorHandle(res, error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userServices = userService();
    const payload = { ...req.body, user_id: req.params.id, updated_at_users: new Date() };
    const user = await userServices.updateUser(payload);

    return ResponseSuccess(res, {
      data: user,
      message: 'ok',
      statusCode: 200,
    });
  } catch (error) {
    return ErrorHandle(res, error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userServices = userService();
    const payload = { ...req.body, user_id: req.params.id };
    const user = await userServices.deleteUser(payload);

    return ResponseSuccess(res, {
      data: user,
      message: 'ok',
      statusCode: 200,
    });
  } catch (error) {
    return ErrorHandle(res, error);
  }
};

export { getUsers, addUser, updateUser, deleteUser, getOneUser };
