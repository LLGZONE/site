import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { ServerLocation } from '@reach/router';
import configureStore from './models/configure';
import App from './app';

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
class SSR extends React.Component<{
  store: any;
  url: string;
}> {
  render() {
    return (
      <Provider store={this.props.store}>
        <ServerLocation url={this.props.url}>
          <App />
        </ServerLocation>
      </Provider>
    );
  }
}
export default SSR;
