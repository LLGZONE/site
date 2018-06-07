// @ts-check
const Router = require('koa-router');
const router = new Router();
const api = require('../constants/api');
const indexController = require('../controller/indexController');
const userController = require('../controller/userController');
const articleController = require('../controller/articleController');
router.get(api.user_info, userController.user_info);
router.post(api.signin, userController.signin);
router.post(api.signup, userController.signup);
router.post(api.signout, userController.signout);
router.get(api.article_list, articleController.article_list);

router.stack.forEach(element => {
  console.log(element.path, element.methods);
});
module.exports = router;
