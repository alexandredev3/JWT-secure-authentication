import { injectable, inject } from 'tsyringe';
import { sign, SignOptions } from 'jsonwebtoken';

import IUserRepository from '../repositories/IUserRepository';

import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import config from '../config/index';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: string
  };
  token: string;
}

const { 
  expiresIn, 
  secret_private 
} = config.auth;

const signOptions: SignOptions = {
  expiresIn,
  algorithm: 'RS256'
};

@injectable()
class AuthenticateService {
  private userRepository: IUserRepository;
  private hashProvider: IHashProvider;

  constructor(

    @inject('UserRepository')
    userRepository: IUserRepository,

    @inject('HashProvider')
    hashProvider: IHashProvider,

  ) {
    this.userRepository = userRepository;
    this.hashProvider = hashProvider;
  }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('User does not exists');
    }

    const { 
      password: passwordHashed,
      id,
      name,
      email: userEmail,
      role  
    } = user;

    const compareHash = await this.hashProvider.compareHash(password, passwordHashed);

    if (!compareHash) {
      throw new Error('Password does not match');
    }

    const token = sign({ id: String(id), role }, secret_private, signOptions);

    return {
      user: {
        id,
        name,
        email: userEmail,
        role
      },
      token
    }
  }
}

export default AuthenticateService;