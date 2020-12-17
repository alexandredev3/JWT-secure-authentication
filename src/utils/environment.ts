import dotenv from 'dotenv';

dotenv.config();

export const {
  TYPEORM_TYPE,
  AUTH_PRIVATE,
  AUTH_PUBLIC
} = process.env