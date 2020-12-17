import User from '../entities/User';
import { injectable, inject } from 'tsyringe';

import IUserRepository from '../repositories/IUserRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
  role: string;
}

@injectable()
class CreateUserService {
  private userRepository: IUserRepository;
  private hashProvider: IHashProvider;

  constructor(

    @inject('UserRepository')
    userRepository: IUserRepository,

    @inject('HashProvider')
    hashProvider: IHashProvider

  ) {
    this.userRepository = userRepository;
    this.hashProvider = hashProvider;
  }

  public async execute({ name, email, password, role }: IRequest): Promise<User> {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new Error("User already exists");
    }

    const passwordHashed = await this.hashProvider.generateHash(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHashed,
      role
    });

    return user;
  } 
}

export default CreateUserService;