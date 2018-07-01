import React from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import Loading from 'components/loading';

export default function Auth(
  config: { checkLogin?: boolean; checkNotLogin?: boolean } = {}
) {
  return WrappedComponent => {
    class WithAuth extends React.Component<{
      user_info: {
        user_name?: string;
        [key: string]: any;
      };
      [key: string]: any;
    }> {
      state = {
        isAuth: false
      };
      componentDidMount() {
        const { user_info } = this.props;
        if (config.checkLogin) {
          if (!user_info.username) {
            navigate('/signin');
          } else {
            this.setState({
              isAuth: true
            });
          }
        }
        if (config.checkNotLogin) {
          if (!user_info.username) {
            this.setState({
              isAuth: true
            });
          } else {
            navigate('/feed');
          }
        }
      }
      render() {
        return this.state.isAuth ? <WrappedComponent {...this.props} /> : null;
      }
    }
    return connect((state: any) => {
      return {
        user_info: state.user_info
      };
    })(WithAuth);
  };
}
