import { Context, Next } from 'koa';
import jwt from 'jsonwebtoken';

import config from '../config';

const { 
  secret_public,
} = config.auth

interface IUserPayload {
  id: string;
  role: string;
}

const extractToken = (context: Context) => {
  const authorizationHeader = context.headers.authorization || '';

  const token: string = authorizationHeader.replace('Bearer ', '');

  return token;
};

const verify = (token: string) => {
  // não use o decoded, o decoded so vai extrair as informações do payload é não verificar se o token e valido.
  const data = jwt.verify(token, secret_public, (error, data) => {
    if (error)
      return error;

    return data;
  });

  return data as unknown as IUserPayload;
}

export default (context: Context, next: Next) => {
  const token = extractToken(context);

  const tokenPayload = verify(token);

  if (tokenPayload instanceof Error) {
    return context.response.body = {
      status: context.response.status = 401,
      message: 'Invalid authentication token',
      code: 'UNAUTHENTICATED'
    }
  }

  context.state.user = tokenPayload;

  return next();
}