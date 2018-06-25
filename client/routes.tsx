import Loadable from 'react-loadable';
import Loading from './components/loading';
import Path from 'constants/path';

export default [
  {
    name: 'signin',
    path: Path.signin,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "signin" */ './containers/signin'),
      loading: Loading
    })
  },
  {
    name: 'signup',
    path: Path.signup,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "signup" */ './containers/signup'),
      loading: Loading
    })
  },
  {
    name: 'feed',
    path: Path.feed,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "feed" */ './containers/feed'),
      loading: Loading
    })
  },
  {
    name: 'home',
    path: Path.home,
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
    path: Path.studio,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "studio" */ './containers/studio'),
      loading: Loading
    })
  }
];
