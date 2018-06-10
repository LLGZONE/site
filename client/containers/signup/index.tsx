import React from 'react';
import Sign from 'components/sign';

export default class SignUp extends React.Component {
  render() {
    return <Sign type={'signup'} {...this.props} />;
  }
}
