import { container } from 'tsyringe';

import UserRepository from '../repositories/UserRepository'
import IUserRepository from '../repositories/IUserRepository'

import './providers/HashProvider';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
);