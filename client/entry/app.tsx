import * as React from 'react';
import Routers from './routes';
import { Router } from '@reach/router';
import NotFound from 'containers/404';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        {Routers.map(({ name, path, component: Component }) => {
          return <Component key={name} path={path} />;
        })}
        <NotFound default />
      </Router>
    );
  }
}
