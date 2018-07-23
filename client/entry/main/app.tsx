import * as React from 'react';
import Routers from './routes';
import { Router } from '@reach/router';
import Page from 'components/page';
import NotFound from 'containers/404';

export default class App extends React.Component {
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
