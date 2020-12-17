import { AUTH_PRIVATE, AUTH_PUBLIC } from '../utils/environment';

export default {
  expiresIn: '15m',
  secret_private: AUTH_PRIVATE,
  secret_public: AUTH_PUBLIC
}