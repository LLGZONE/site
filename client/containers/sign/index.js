import React from "react";
import { Button } from 'antd';
import http from "../../lib/fetch";
import URL from '../../constants/url';
export default class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    const { match } = this.props;
  }
  get sign_type() {
    const { match } = this.props;
    return match.params.type || 'signin';
  }
  signup = () => {
    const { username, password } = this.state;
    http({
      method: 'POST',
      url: this.sign_type === 'signup' ?  URL.signup : URL.signin,
      data: {
        username,
        password
      }
    }).then(() => {
      
    })
  };
  update = (key,e) => {
    this.setState({
      [key]: e.target.value
    })
  }
  render() {
    const { username, password } = this.state;
    return (
      <div className="sigin-container">
        <input placeholder="username" value={username} onChange={this.update.bind(this, 'username')} />
        <input placeholder="password" value={password} onChange={this.update.bind(this, 'password')} />
        <button onClick={this.signup}>{this.sign_type}</button>
      </div>
    );
  }
}
