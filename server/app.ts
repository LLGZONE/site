import { Core } from './core';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import session from 'koa-session';
import redisStore from 'koa-redis';
import errorHandle from './middleware/errorHandler';
import logger from './middleware/logger';
import router from './router';
import { client, models } from './db';
import config from './config';
const app = new Core();
app.use(errorHandle);
app.use(logger);
app.on('error', err => {
  console.log('app err:', err);
});
app.use(cors());
app.use(koaBody());
app.keys = ['secret key'];
const session_config = {
  store: redisStore({})
};
app.use(session(session_config, app));
// 扩充context
app.use(async (ctx: any, next) => {
  const connection = client.sync();
  ctx.models = models;
  ctx.client = client;
  ctx.success = (data = {}) => {
    ctx.body = {
      code: 0,
      message: 'success',
      data
    };
  };
  ctx.fail = (message = 'fail', code = -1) => {
    ctx.body = {
      code,
      message,
      data: {}
    };
  };
  await next();
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(config.server.port || 3333, () => {
  console.log('start server at port: ', config.server.port);
});
const a: string = 'hello';
