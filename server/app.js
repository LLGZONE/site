const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const router = require('./router');
const static = require('./middleware/static');

const config = process.env.NODE_ENV === 'development' ? require('../config/conf.local') : require('../config/conf.prod');

const app = new Koa();

app.use(async (ctx,next) => {
  ctx.config = config;
  ctx.env = process.env.NODE_ENV;
  ctx.isDev = process.env.NODE_ENV === 'development';
  await next();
})


static(app);
app.use(cors());
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());


app.listen(config.server_port || 3333, () => {
  console.log('start server at port: ', config.server_port)
})