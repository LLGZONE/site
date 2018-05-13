const Router = require('koa-router');
const router = new Router();

router.get('/hello', async (ctx,next) => {
  ctx.body = 'hello';
})
router.post('/hooks', async (ctx,next) => {
  console.log('hook info:', ctx.body);
});

module.exports = router;