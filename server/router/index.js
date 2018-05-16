const Router = require('koa-router');
const router = new Router();
const indexController = require('../controller/indexController');

router.get('/view', indexController.index);

module.exports = router;