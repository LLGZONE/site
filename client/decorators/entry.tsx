import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import SSR from 'components/ssr';
export default function entry({ configureStore }) {
  return App => {
    if (!IS_NODE) {
      // 客户端渲染
      const initial_state = window.__INITIAL_STATE__;
      const store = configureStore(initial_state);
      Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
          <Provider store={store}>
            <App />
          </Provider>,
          document.getElementById('root')
        );
      });
    }
    return SSR(App);
  };
}
