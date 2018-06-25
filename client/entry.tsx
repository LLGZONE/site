import { Router } from '@reach/router';
import React from 'react';
import ReactDOM from 'react-dom';
import * as URL from './constants/api/topfeed';
import NotFound from 'containers/404';
import http from './lib/http';
import Routers from './routes';
import { init } from '@rematch/core';
import * as models from './models';
import formatUser from './lib/format_user';
import { Provider } from 'react-redux';
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
    user_info = formatUser(result);
  } catch (err) {
    user_info = formatUser({});
  }
  await store.dispatch.user_info.update(user_info);
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        {Routers.map(({ name, path, component: Component }) => {
          return <Component key={name} path={path} />;
        })}
        <NotFound default />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
})();
