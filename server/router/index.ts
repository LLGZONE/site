// @ts-check
import Router from 'koa-router';

const router = new Router();
import api from '../constants/api';
import indexController from '../controller/indexController';
import userController from '../controller/userController';
import articleController from '../controller/articleController';
router.get(api.user_info, userController.user_info);
router.post(api.signin, userController.signin);
router.post(api.signup, userController.signup);
router.post(api.signout, userController.signout);
router.get(api.article_list, articleController.article_list);

router.stack.forEach(element => {
  console.log(element.path, element.methods);
});
export default router;
