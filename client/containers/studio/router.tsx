import Loadable from 'react-loadable';
import * as Path from 'constants/path';

export default [
  {
    name: 'post',
    path: Path.post,
    component: Loadable({
      loader: () => import('./post')
    })
  },
  {
    name: 'settings',
    path: Path.settings,
    component: Loadable({
      loader: () => import('./setting')
    })
  }
];
