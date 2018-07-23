import * as React from 'react';
import Routers from './routes';
import { Router } from '@reach/router';
import Page from 'components/page';
import NotFound from 'containers/404';
import entry from 'decorators/entry';
import configureStore from './models/configure';

class App extends React.Component {
  render() {
    return (
      <Page>
        <Router basepath="/studio">
          {Routers.map(({ name, path, component: Component }) => {
            return <Component key={name} path={path} />;
          })}
          <NotFound default />
        </Router>
      </Page>
    );
  }
}

export default entry({
  configureStore
})(App);
