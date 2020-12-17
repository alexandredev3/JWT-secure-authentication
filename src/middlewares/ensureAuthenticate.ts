import { Context, Next } from 'koa';
import { instanceCachingFactory } from 'tsyringe';
import JwtTokenProvider from '../utils/jwtToken';

interface ResponseError {
  status: number,
  message: string;
  code: string;
}

const { verify } = JwtTokenProvider;

const extractToken = (context: Context): String => {
  const authorizationHeader = context.headers.authorization || '';

  return authorizationHeader.replace('Bearer ', '');
};

export default (context: Context, next: Next) => {
  const token = extractToken(context);

  const tokenVerify = verify(token as string);

  if (tokenVerify instanceof Error) {
    return context.response.body = {
      status: context.response.status = 401,
      message: 'Invalid authentication token',
      code: 'UNAUTHENTICATED'
    }
  }

  context.state.userId = tokenVerify;

  return next();
}

