import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './models/configure';
import App from './app';
declare var IS_NODE;
if (!IS_NODE) {
  // 客户端渲染
  const initial_state = (window as any).__INITIAL_STATE__;
  const store = configureStore(initial_state);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
export default App;
