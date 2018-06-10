import React from 'react';
import { Redirect } from '@reach/router';
import Layout from 'components/layout';
import 'style/common.less';

export default class Home extends React.Component<{
  user_info: {
    username?: string;
  };
}> {
  static defaultProps = {
    user_info: window.user_info
  };
  state = {
    user: null
  };
  render() {
    const { user_info } = this.props;
    if (user_info.username) {
      return <Redirect to="/feed" />;
    } else {
      return <Redirect to="/signin" />;
    }
  }
}
