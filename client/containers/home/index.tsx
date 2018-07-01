import React from 'react';
import { Redirect } from '@reach/router';
import { connect } from 'react-redux';
import Layout from 'components/layout';
import 'style/common.less';

class Home extends React.Component<{
  user_info: {
    username?: string;
  };
}> {
  state = {
    user: null
  };
  render() {
    const { user_info } = this.props;
    if (user_info.username) {
      return <Redirect to="/feed" noThrow />;
    } else {
      return <Redirect to="/signin" noThrow />;
    }
  }
}

export default connect((state: any) => ({ user_info: state.user_info }))(Home);
