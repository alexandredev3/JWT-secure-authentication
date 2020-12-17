import 'reflect-metadata';

import Koa from 'koa';
import bodyParse from 'koa-bodyparser';

import './database/connection';
import './container';

import config from './config';
import router from './routes';

const { port } = config.server;

const app = new Koa();

app.use(bodyParse());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port)
  .on('listening', () => (
    console.log(`Server is running on ${port}`)
  ))