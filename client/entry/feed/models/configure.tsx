import configureStore from 'lib/configre_store';
import * as models from './index';

export default function configure(init_props) {
  return configureStore(models, init_props);
}
