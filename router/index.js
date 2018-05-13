const Router = require('koa-router');
const router = new Router();

router.get('/hello', async (ctx,next) => {
  ctx.body = 'hello';
})

module.exports = router;