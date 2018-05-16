const Router = require('koa-router');
const router = new Router();
const indexController = require('../controller/indexController');
const userController = require('../controller/userController');

router.get('/view', indexController.index);

router.post('/signin', userController.signin);
router.post('/signup', userController.signup);

router.stack.forEach(element => {
  console.log(element.path, element.methods);
})
module.exports = router;