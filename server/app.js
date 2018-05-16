const Koa = require("koa");
const koaBody = require("koa-body");
const cors = require("@koa/cors");
const path = require("path");
const logger = require("koa-logger");
const session = require("koa-session");
const errorHandle = require('./middleware/errorHandler');
const router = require("./router");
const { client, models } = require("./db");
const config = require("../config");
const app = new Koa();
app.use(errorHandle);
app.on('error', (err) => {
  console.log('err:', err);
})
app.use(cors());
app.use(koaBody());
app.use(logger());
app.keys = ["secret key"];
const session_config = {
  key: "koa:sess",
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
};
app.use(session(session_config, app));
// 扩充context
app.use(async (ctx, next) => {
  const connection = client.sync();
  ctx.models = models;
  ctx.client = client;
  ctx.success = (data) => {
    ctx.body = {
      code: 0,
      message: 'success',
      data
    }
  }
  ctx.fail = (code = 1,message = 'fail') => {
    ctx.body = {
      code,
      message,
      data: {
      }
    }
  }
  await next();
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(config.server.port || 3333, () => {
  console.log("start server at port: ", config.server.port);
});
