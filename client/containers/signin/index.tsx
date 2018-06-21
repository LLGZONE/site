import React from 'react';
import Sign from 'components/sign';
import Auth from 'decorators/auth';

class SignIn extends React.Component {
  render() {
    return <Sign type={'signin'} {...this.props} />;
  }
}

export default Auth({ checkNotLogin: true })(SignIn);
