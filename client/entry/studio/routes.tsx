import Loadable from 'react-loadable';
import Loading from 'components/loading';
import * as Path from 'constants/path';

export default [
  {
    name: 'signin',
    path: Path.signin,
    component: Loadable({
      loader: () => import('containers/signin'),
      loading: Loading
    })
  },
  {
    name: 'signup',
    path: Path.signup,
    component: Loadable({
      loader: () => import('containers/signup'),
      loading: Loading
    })
  },
  {
    name: 'home',
    path: Path.home,
    component: Loadable({
      loader: () => import('containers/home'),
      loading: Loading
    })
  },
  {
    name: 'i18n',
    path: '/i18n',
    component: Loadable({
      loader: () => import('containers/i18n'),
      loading: Loading
    })
  },
  {
    name: 'studio',
    path: `${Path.studio}/*`,
    component: Loadable({
      loader: () => import('containers/studio'),
      loading: Loading
    })
  }
];
