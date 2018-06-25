import Loadable from 'react-loadable';
import Loading from 'components/loading';
import * as Path from 'constants/path';

export default [
  {
    name: 'post',
    path: Path.post,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "post" */ './post')
    })
  },
  {
    name: 'settings',
    path: Path.settings,
    component: Loadable({
      loader: () => import(/* webpackChunkName: "settings" */ './setting')
    })
  }
];
