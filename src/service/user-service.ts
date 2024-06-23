import { IUser } from '@/interface/user';
import UserRepository from '@/repository/user-repository';

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }
  static createInstance(userRepository: UserRepository): UserService {
    return new UserService(userRepository);
  }
  public async getUser(): Promise<IUser | undefined> {
    try {
      const user = await this.userRepository.getUsers();
      return user;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default UserService;
