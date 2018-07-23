import React from 'react';
import { Provider } from 'react-redux';
import { ServerLocation } from '@reach/router';

class SSR extends React.Component<{
  store: any;
  url: string;
  App: any;
}> {
  render() {
    const { App } = this.props;
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
