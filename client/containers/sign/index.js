import React from "react";
import { Input, Button } from "antd";
import http from "../../lib/fetch";
export default class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  signup = () => {
    const { username, password } = this.state;
    http({
      method
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <div className="sigin-container">
        <Input placeholder="username" value={username} />
        <Input placeholder="password" value={password} />
        <Button onClick={this.signup}>Submit</Button>
      </div>
    );
  }
}
