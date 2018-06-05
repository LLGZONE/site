import React from "react";
import http from "../../lib/fetch";
import URL from "../../constants/url";
import { Button, Input, message } from "antd";
import Layout from '../../components/layout';
import "./index.less";
export default class Sign extends React.Component<{
  match: any;
},{
  username?: string;
  password?: string;
}> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  get sign_type() {
    const { match } = this.props;
    return match.params.type || "signin";
  }
  signup = () => {
    const { username, password } = this.state;
    http({
      method: "POST",
      url: URL.signup,
      data: {
        username,
        password
      }
    }).then(
      () => {
        message.success("注册成功,请登录");
        setTimeout(() => {
          location.href = "/signin";
        }, 1000);
      },
      err => {
        message.error("注册失败:", err.message);
      }
    );
  };
  signin = () => {
    const { username, password } = this.state;
    http({
      method: "POST",
      url: URL.signin,
      data: {
        username,
        password
      }
    }).then(
      () => {
        message.success("登录成功");
        setTimeout(() => {
          location.href = "/admin";
        }, 1000);
      },
      err => {
        message.error("登录失败");
      }
    );
  };
  update = (key: 'username' | 'password', e) => {
    this.setState({
      [key]: e.target.value
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <Layout>
        <div className="sign-container">
          <div className="form-container">
            <Input
              placeholder="username"
              className="username"
              value={username}
              onChange={this.update.bind(this, "username")}
            />
            <Input
              placeholder="password"
              className="password"
              value={password}
              onChange={this.update.bind(this, "password")}
            />
            <Button
              className="submit-btn"
              onClick={this.sign_type === "signup" ? this.signup : this.signin}
            >
              {this.sign_type}
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
}
