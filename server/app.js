const Koa = require("koa");
const koaBody = require("koa-body");
const cors = require("@koa/cors");
const path = require("path");
const logger = require("koa-logger");
const session = require("koa-session");
const router = require("./router");
const static = require("./middleware/static");
const { client, models } = require("./db");
const config = require("../config");
const app = new Koa();

static(app);
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
app.use(async (ctx, next) => {
  ctx.models = models;
  ctx.client = client;
  await next();
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(config.server_port || 3333, () => {
  console.log("start server at port: ", config.server_port);
});
