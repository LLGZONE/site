import * as React from 'react';
import Routers from './routes';
import { Router } from '@reach/router';
import NotFound from 'containers/404';
import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import cnLocaleData from 'react-intl/locale-data/zh';
addLocaleData(cnLocaleData);

class App extends React.Component<{
  messages: { [key: string]: string };
  locale: 'en' | 'zh';
}> {
  render() {
    const { messages, locale } = this.props;
    return (
      <IntlProvider locale={locale} messages={messages} key={locale}>
        <Router>
          {Routers.map(({ name, path, component: Component }) => {
            return <Component key={name} path={path} />;
          })}
          <NotFound default />
        </Router>
      </IntlProvider>
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
