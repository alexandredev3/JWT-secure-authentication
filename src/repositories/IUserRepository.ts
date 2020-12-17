import User from '../entities/User';
import ICreateUserDTO from '../dtos/ICreateUsersDTO';

export default interface IUserRepository {
  create(userCredentials: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>
}