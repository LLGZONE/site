import * as React from 'react';
import Routers from './routes';
import { Router } from '@reach/router';
import Page from 'components/page';
import entry from 'decorators/entry';
import configureStore from './models/configure';

class App extends React.Component {
  render() {
    return (
      <Page>
        <Router>
          {Routers.map(({ name, path, component: Component }) => {
            return <Component key={name} path={path} />;
          })}
        </Router>
      </Page>
    );
  }
}

export default entry({
  configureStore
})(App);
