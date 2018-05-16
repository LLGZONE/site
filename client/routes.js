import Loadable from 'react-loadable';
import Loading from './components/loading';

export default [
  {
    name: 'admin',
    path: '/admin',
    component: Loadable({
      loader: () => import('./containers/admin'),
      loading: Loading
    })
  },
  {
    name: 'home',
    path: '/',
    component: Loadable({
      loader: () => import('./containers/home'),
      loading: Loading
    })
  },
  {
    name: 'sign',
    path: '/sign',
    component: Loadable({
      loader: () => import('./containers/sign'),
      loading: Loading
    })
  }
]