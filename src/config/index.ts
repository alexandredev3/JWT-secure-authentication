import server from './server';
import hash from './bcryton';
import auth from './auth';

interface IConfig {
  server: {
    port: number;
  };
  hash: {
    hashSaltRounds: number
  };
  auth: {
    expiresIn: string;
    secret_private: string;
    secret_public: string;
  }
}

export default {
  server,
  hash,
  auth
} as unknown as IConfig;