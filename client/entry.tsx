import { Router } from '@reach/router';
import React from 'react';
import ReactDOM from 'react-dom';
import * as URL from './constants/api/topfeed';
import NotFound from 'containers/404';
import http from './lib/http';
import Routers from './routes';

(async function() {
  try {
    const result = await http({
      method: 'GET',
      url: URL.user_info
    });
    window.user_info = result;
  } catch (err) {
    window.user_info = {};
  }
  ReactDOM.render(
    <Router>
      {Routers.map(({ name, path, component: Component }) => {
        return <Component key={name} path={path} />;
      })}
      <NotFound default />
    </Router>,
    document.getElementById('root')
  );
})();
