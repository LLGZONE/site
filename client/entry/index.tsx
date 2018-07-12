import React from 'react';
import ReactDOM from 'react-dom';
import * as URL from 'constants/api/topfeed';
import http from 'lib/http';
import formatUser from 'lib/format_user';
import { Provider } from 'react-redux';
import configureStore from './models/configure';
declare var IS_NODE: boolean;
import App from './app';
if (!IS_NODE) {
  // 客户端渲染
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
    const store = configureStore({
      user_info
    });
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  })();
}

export default App;
