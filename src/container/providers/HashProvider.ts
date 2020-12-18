import { container } from 'tsyringe';

import HashProvider from '../../providers/HashProvider/implementations/HashProvider';
import IHashProvider from '../../providers/HashProvider/models/IHashProvider';

container.registerSingleton<IHashProvider>(
  'HashProvider',
  HashProvider
);