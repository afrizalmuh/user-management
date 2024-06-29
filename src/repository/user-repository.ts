import { IUser } from '@/interface/user';
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

  public async getUsers(): Promise<IUser[]> {
    try {
      const data: IUser[] = await this.prisma.user.findMany();
      // const data: IUser[] = await this.prisma.$queryRaw`SELECT * FROM "User";`;
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default UserRepository;
