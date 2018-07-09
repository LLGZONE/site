import React from 'react';
import ReactDOM from 'react-dom';
import { init } from '@rematch/core';
import * as URL from 'constants/api/topfeed';
import http from 'lib/http';
import formatUser from 'lib/format_user';
import { Provider } from 'react-redux';

import App from './app';
import * as models from './models';

const store = init({
  models
});

(async function() {
  let user_info;
  try {
    const result = await http({
      method: 'GET',
      url: URL.user_info
    });
    user_info = formatUser((result as any).user_info);
  } catch (err) {
    user_info = formatUser({});
  }
  // 临时方案，rematch暂时不支持initial_props
  await store.dispatch({
    type: 'user_info/update',
    payload: user_info
  });
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})();
