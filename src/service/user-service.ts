import { IAddUser, IUser } from '@/interface/user';
import UserRepository from '@/repository/user-repository';

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  static createInstance(userRepository: UserRepository): UserService {
    return new UserService(userRepository);
  }
  
  public async getUser(): Promise<IUser[] | undefined> {
    try {
      const user = await this.userRepository.getUsers();
      return user;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async getOneUser(payload : IUser) {
    try {
      const user = await this.userRepository.getOneUser(payload)
      return user  
    } 
    
    catch (error) {
      return Promise.reject(error)
    }
  }
  public async addUser(payload : IAddUser) {
    try {
      const user = await this.userRepository.addUsers(payload)
      return user
    } 
    catch (error) {
      return Promise.reject(error)
    }
  }

  public async updateUser(payload : IUser) {
    try {
      const user = await this.userRepository.updateUsers(payload)
      return user
    } 
    catch (error) {
      return Promise.reject(error)
    }
  }

  public async deleteUser(payload : IUser){
    try {
      const user = await this.userRepository.deleteUser(payload)  
      return user
    } 
    
    catch (error) {
      return Promise.reject(error)
    }
  }
  
}

export default UserService;
