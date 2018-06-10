import React from 'react';
import Sign from 'components/sign';
import Auth from 'decorators/auth';

@Auth({
  checkNotLogin: true
})
export default class SignIn extends React.Component {
  render() {
    return <Sign type={'signin'} {...this.props} />;
  }
}
