import { IAddUser, IUser } from '@/interface/user';
import { PrismaClient } from '@prisma/client';

class UserRepository {
  private static instance: UserRepository;
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  static createInstance(): UserRepository {
    this.instance = new UserRepository();
    return this.instance;
  }
  
  //get all users
  public async getUsers(): Promise<IUser[]> {
    try {
      // const data: IUser[] = await this.prisma.user.findMany();
      const data: IUser[] = await this.prisma.$queryRaw`SELECT * FROM "User";`;
      // console.log(data);
      return data;
    } 
    
    catch (error) {
      return Promise.reject(error);
    }
  }

  //get 1 user

  public async getOneUser(payload : IUser) {
    try {
      const data: IUser | null = await this.prisma.user.findUnique({
        where : {
          user_id : Number(payload.user_id)
        }
      })
      return data
    } 
    
    catch (error) {
      return Promise.reject(error)
    }
  }

  public async addUsers(payload : IAddUser): Promise<IUser> {
    try {
      const result: IUser = await this.prisma.user.create({
        data : payload
      })

      console.log(result);
      return result;
    } 
    
    catch (error) {
      return Promise.reject(error);
    }
  }

  public async updateUsers(payload : IUser): Promise<IUser> {
    try {
      const result: IUser = await this.prisma.user.update({
        where:{
         user_id : Number(payload.user_id)
        }, 
        data:{
          fullname_users: payload.fullname_users,
          username_users: payload.username_users,
          password_users: payload.password_users,
          role_id: payload.role_id,
          email_users:payload.email_users,
          updated_at_users: payload.updated_at_users
        }
      })
      
      console.log(result);
      return result;
    } 
    
    catch (error) {
      return Promise.reject(error);
    }
  }

  public async deleteUser(payload : IUser) {
    try {
      const result : IUser = await this.prisma.user.delete({
        where:{
          user_id : Number(payload.user_id)
        }
      })
      return result  
    } 
    
    catch (error) {
      return Promise.reject(error)
    }
  }

}

export default UserRepository;
