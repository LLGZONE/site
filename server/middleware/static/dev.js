const Bundler = require("parcel-bundler");
const views = require("koa-views");
const serve = require("koa-static");
const path = require("path");
const r = dir => path.resolve(__dirname, dir);

const bundler = new Bundler(r("../../../client/index.html"), {
  publicUrl: "/",
  watch: true
});

module.exports = async function(app) {
  await bundler.bundle();

  app.use(serve(r("../../../dist")));

  app.use(
    views(r("../../../dist"), {
      extension: "html"
    })
  );

  app.use(async ctx => {
    await ctx.render("index.html");
  });
};
