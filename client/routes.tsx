import Loadable from 'react-loadable';
import Loading from './components/loading';

export default [
  {
    name: 'admin',
    path: '/admin',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "admin" */ './containers/admin'),
      loading: Loading
    })
  },
  {
    name: 'sign',
    path: '/:type',
    exact: true,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "sign" */ './containers/sign'),
      loading: Loading
    })
  },
  {
    name: 'feed',
    path: '/feed',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "feed" */ './containers/feed'),
      loading: Loading
    })
  },
  {
    name: 'feed',
    path: '/',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "feed" */ './containers/feed'),
      loading: Loading
    })
  },
  {
    name: 'detail',
    path: '/a/:item_id',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "detail" */ './containers/detail'),
      loading: Loading
    })
  }
];
