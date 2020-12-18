import 'reflect-metadata';
import { createConnection } from 'typeorm';

export let isConnected = false;

createConnection()
  .then(() => isConnected = true)