const Router = require('koa-router');
const router = new Router();
const indexController = require('../controller/indexController');
const userController = require('../controller/userController');
router.prefix('/api');
router.get('/view', indexController.index);

router.get('/user/get', userController.user_info);
router.post('/signin', userController.signin);
router.post('/signup', userController.signup);
router.post('/signout', userController.signout);

router.stack.forEach(element => {
  console.log(element.path, element.methods);
})
module.exports = router;