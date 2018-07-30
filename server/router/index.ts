import Router from 'koa-router';

const router = new Router();
import api from '../constants/api';
import userController from '../controller/api/userController';
import articleController from '../controller/api/articleController';
import studioController from '../controller/studioController';
import indexController from '../controller/indexController';
import aboutController from '../controller/aboutController';
import errorController from '../controller/errorController';
import feedController from '../controller/feedController';
import detailContoller from '../controller/detailController';

// api接口
router.get(api.user_info, userController.user_info);
router.post(api.user_update, userController.user_update);
router.post(api.signin, userController.signin);
router.post(api.signup, userController.signup);
router.post(api.signout, userController.signout);
router.get(api.article_list, articleController.article_list);
router.get(api.article_item, articleController.article_item);

// 前端路由
router.get('/', indexController.index);
router.get('/studio/:path*', studioController.main);
router.get('/about', aboutController.main);
router.get('/error', errorController.main);
router.get('/feed/:item_id?', feedController.main);
router.get('/a/:item_id', detailContoller.main);
router.stack.forEach(element => {
  console.log(element.path, element.methods);
});
export default router;
