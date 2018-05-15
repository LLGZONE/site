const views = require('koa-views');
const serve = require('koa-static');
const path = require('path');

module.exports = app => {
  app.use(serve(path.resolve(__dirname, '../../dist')))
  app.use(views(path.resolve(__dirname, '../../dist'), {
    extension: 'html'
  }))

  app.use(async (ctx) => {
    await ctx.render('index.html')
  })
}
