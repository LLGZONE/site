import React from 'react';
import intl from 'react-intl-universal';
import IntlPolyfill from 'intl';
global.Intl = IntlPolyfill;
import { connect } from 'react-redux';
import('intl/locale-data/jsonp/en.js');
import('intl/locale-data/jsonp/zh.js');

class Page extends React.Component<{
  locale: string;
  messages: { [key: string]: string };
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
    return this.props.children;
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
)(Page);
