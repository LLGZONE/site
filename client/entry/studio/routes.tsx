import Loadable from 'react-loadable';
import Loading from 'components/loading';

export default [
  {
    name: 'signin',
    path: '/studio/signin',
    component: Loadable({
      loader: () => import('containers/signin'),
      loading: Loading
    })
  },
  {
    name: 'signup',
    path: '/studio/signup',
    component: Loadable({
      loader: () => import('containers/signup'),
      loading: Loading
    })
  },
  {
    name: 'i18n',
    path: '/studio/i18n',
    component: Loadable({
      loader: () => import('containers/i18n'),
      loading: Loading
    })
  },
  {
    name: 'studio',
    path: '/studio/*',
    component: Loadable({
      loader: () => import('containers/studio'),
      loading: Loading
    })
  }
];
