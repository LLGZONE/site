import Loadable from 'react-loadable';
import Loading from './components/loading';

export default [
  {
    name: 'admin',
    icon: 'admin',
    path: '/admin',
    component: Loadable({
      loader: () => import('./containers/admin'),
      loading: Loading
    })
  }
]