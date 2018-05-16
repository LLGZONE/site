const Router = require('koa-router');
const router = new Router();
const indexController = require('../controller/indexController');
const userController = require('../controller/userController');

router.get('/api/view', indexController.index);

router.get('/api/user/get', userController.user_info);
router.post('/api/signin', userController.signin);
router.post('/api/signup', userController.signup);
router.post('/api/signout', userController.signout);

router.stack.forEach(element => {
  console.log(element.path, element.methods);
})
module.exports = router;