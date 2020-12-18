import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

import IUserRepository from './IUserRepository';
import ICreateUserDTO from '../dtos/ICreateUsersDTO';

class CreateUserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(userCredentials: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userCredentials);

    await this.ormRepository.save(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email: email },
    });
    
    return user;
  }
}

export default CreateUserRepository;