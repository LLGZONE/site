import * as React from 'react';
import Routers from './routes';
import { Router } from '@reach/router';
import NotFound from 'containers/404';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import IntlPolyfill from 'intl';
global.Intl = IntlPolyfill;
import('intl/locale-data/jsonp/en.js');
import('intl/locale-data/jsonp/zh.js');

class App extends React.Component<{
  messages: { [key: string]: string };
  locale: 'en' | 'zh';
}> {
  constructor(props) {
    super(props);
    const currentLocale = this.props.locale;
    intl.init({
      currentLocale,
      locales: {
        [currentLocale]: this.props.messages
      }
    });
  }
  render() {
    return (
      <Router basepath="/studio">
        {Routers.map(({ name, path, component: Component }) => {
          return <Component key={name} path={path} />;
        })}
        <NotFound default />
      </Router>
    );
  }
}
const mapState = (state: any) => {
  return {
    messages: state.locale.messages,
    locale: state.locale.locale
  };
};
const mapDispatch = (state: any) => {
  return {
    update_locale: state.locale.update_locale
  };
};
export default connect(
  mapState,
  mapDispatch
)(App);
