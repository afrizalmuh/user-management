import { Request, Response } from 'express';
import UserService from '@/service/user-service';
import UserRepository from '@/repository/user-repository';
import { ResponseSuccess } from '@/utils/response';

const getUsers = async (req: Request, res: Response) => {
  try {
    const userRepository = UserRepository.createInstance();
    const userSerice = UserService.createInstance(userRepository);
    const user = await userSerice.getUser();
    return ResponseSuccess(res, {
      data: user,
      message: 'ok',
      statusCode: 200,
    });
  } catch (err) {
    console.log(err);
  }
};

export { getUsers };
