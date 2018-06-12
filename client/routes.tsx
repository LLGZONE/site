import Loadable from 'react-loadable';
import Home from 'containers/home';
import Loading from './components/loading';

export default [
  {
    name: 'signin',
    path: '/signin',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "signin" */ './containers/signin'),
      loading: Loading
    })
  },
  {
    name: 'signup',
    path: '/signup',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "signup" */ './containers/signup'),
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
    name: 'home',
    path: '/',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "feed" */ './containers/home'),
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
  },
  {
    name: 'studio',
    path: '/studio',
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "studio" */ './containers/studio'),
      loading: Loading
    })
  }
];
