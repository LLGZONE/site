import { init } from '@rematch/core';

export default function configure(models, init_props) {
  const store = init({
    models
  });
  for (const model of Object.keys(models)) {
    if (init_props[model] !== undefined) {
      store.dispatch({
        type: `${model}/@init`,
        payload: init_props[model]
      });
    }
  }
  return store;
}
