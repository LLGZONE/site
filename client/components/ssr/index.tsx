import React from 'react';
import { Provider } from 'react-redux';
import { ServerLocation } from '@reach/router';

export default App =>
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
  };
