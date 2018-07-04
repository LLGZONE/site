import Router from 'koa-router';

const router = new Router();
import api from '../constants/api';
import userController from '../controller/userController';
import articleController from '../controller/articleController';
//import renderController from '../controller/renderController';

// api接口
router.get(api.user_info, userController.user_info);
router.post(api.user_update, userController.user_update);
router.post(api.signin, userController.signin);
router.post(api.signup, userController.signup);
router.post(api.signout, userController.signout);
router.get(api.article_list, articleController.article_list);

// 前端路由
//router.get('/', renderController.index);
router.stack.forEach(element => {
  console.log(element.path, element.methods);
});
export default router;
