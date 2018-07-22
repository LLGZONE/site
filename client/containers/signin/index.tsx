import React from 'react';
import Sign from 'components/sign';

class SignIn extends React.Component {
  render() {
    return <Sign type={'signin'} {...this.props} />;
  }
}

export default SignIn;
