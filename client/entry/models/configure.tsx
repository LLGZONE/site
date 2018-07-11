import { init } from '@rematch/core';
import * as models from './index';

export default function configure(init_props) {
  const store = init({
    models
  });
  console.log('models:', models);
  for (const model of Object.keys(models)) {
    store.dispatch({
      type: `${model}/@init`,
      payload: init_props[model]
    });
  }
  return store;
}
