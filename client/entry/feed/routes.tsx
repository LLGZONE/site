import Loadable from 'react-loadable';
import Loading from 'components/loading';

export default [
  {
    name: 'feed',
    path: '/feed',
    component: Loadable({
      loader: () => import('containers/feed'),
      loading: Loading
    })
  },
  {
    name: 'detail',
    path: '/a/:item_id',
    component: Loadable({
      loader: () => import('containers/detail'),
      loading: Loading
    })
  }
];
