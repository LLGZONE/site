import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import configureStore from './models/configure';
import SSR from 'components/ssr';
import App from './app';

export default SSR(App);

declare var IS_NODE;
if (!IS_NODE) {
  // 客户端渲染
  const initial_state = (window as any).__INITIAL_STATE__;
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
