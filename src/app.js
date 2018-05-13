const Koa = require('koa');
const router = require('../router');
const koaBody = require('koa-body');
const config = require('../config/conf.local');

const app = new Koa();
app.use(koaBody());
app.use(async (ctx,next) => {
  ctx.config = config;
  await next();
})
app.use(router.routes()).use(router.allowedMethods());
app.listen(config.server_port || 3333, () => {
  console.log('start server at port: ', config.server_port)
})