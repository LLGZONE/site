import React from "react";
import URL from '../../constants/url';
import http from '../../lib/fetch';
import { message } from 'antd';
import './index.less';

declare global {
  interface Window { 
    user_info: any
   }
}
export default class Nav extends React.Component {
  logout = () => {
    http({
      method: 'POST',
      url: URL.signout
    }).then(() => {
      location.href = '/'
    }, () => {
      message.error('登出失败');
    })
  }
  render() {
    const { username } = window.user_info;
    if (!username) {
      return (
        <div className="nav-container">
          <a className="signin" href="/signin">
            登录
          </a>
          <a className="signup" href="/signup">
            注册
          </a>
        </div>
      );
    } else {
      return (
        <div className="nav-container">
          <div className="username">{username}</div>
          <div className="logout" onClick={this.logout}>登出</div>
        </div>
      );
    }
  }
}
