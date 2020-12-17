import jwt, { SignOptions } from 'jsonwebtoken';

import config from '../config';

interface IPayload {
  id: string;
  role: string;
}

const { 
  secret_private,
  secret_public,
  expiresIn
} = config.auth

const signOptions: SignOptions = {
  expiresIn,
  algorithm: 'RS256'
};

const sign = (payload: IPayload): string => {
  
  const token = jwt.sign(payload, secret_private, signOptions);

  return token;
}

const verify = (token: string) => {
  // não use o decoded, o decoded so vai extrair as informações do payload é não verificar.
  const data = jwt.verify(token, secret_public, (error, data): object | Error | undefined => {
    if (error) 
      return error;

    return data;
  });

  return data as unknown as object;
}

export default {
  sign,
  verify
};