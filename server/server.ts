/**
 * 服务器业务逻辑
 */
import { Core } from './core';
import koaBody from 'koa-body';
import path from 'path';
import cors from '@koa/cors';
import session from 'koa-session';
import redisStore from 'koa-redis';
import koaNunjucks from 'koa-nunjucks-2';
import stringify from 'js-stringify';

import errorHandle from './middleware/errorHandler';
import logger from './middleware/logger';
import locale from './middleware/locale';
import csrf from './middleware/csrf';
import router from './router';
import Loadable from 'react-loadable';
import { client, models } from './db';
import config from './config';
import csrf_check from './middleware/csrf_check';
const app = new Core();

app.use(
  koaNunjucks({
    ext: 'html',
    path: path.join(__dirname, 'view'),
    configureEnvironment: env => {
      env.addFilter('xss', str => {
        const safe = env.filters.safe;
        return safe(stringify(str));
      });
    },
    nunjucksConfig: {
      trimBlocks: true,
      stringify
    }
  })
);

app.use(async (ctx: any, next) => {
  ctx.config = config;
  (app as any).config = config;
  await next();
});
// 注册中间件
app.use(errorHandle());
app.use(logger());
app.use(locale());
app.use(
  csrf({
    salt: config.csrf_salt
  })
);
app.use(
  csrf_check({
    salt: config.csrf_salt
  })
);
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
  client.sync();
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
// 挂载用户信息
app.use(async (ctx: any, next) => {
  ctx.user_info = ctx.session.user || {};
  await next();
});

// 注册路由
app.use(router.routes()).use(router.allowedMethods());

export async function startServer() {
  await Loadable.preloadAll();
  app.listen(config.server.port || 3333, () => {
    console.log('start server at port: ', config.server.port);
  });
}
