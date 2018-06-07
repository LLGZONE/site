import React from 'react';
import * as URL from '../../constants/api/topfeed';
import http from '../../lib/http';
import { message } from 'antd';
import './index.less';

declare global {
  interface Window {
    user_info: any;
  }
}
export default class Nav extends React.Component {
  logout = () => {
    http({
      method: 'POST',
      url: URL.signout
    }).then(
      () => {
        location.href = '/';
      },
      () => {
        message.error('登出失败');
      }
    );
  };
  render() {
    const { username } = window.user_info;
    let account_dom = null;
    if (!username) {
      account_dom = (
        <div className="account-container">
          <a className="signin" href="/signin">
            登录
          </a>
          <a className="signup" href="/signup">
            注册
          </a>
        </div>
      );
    } else {
      account_dom = (
        <div className="account-container">
          <div className="username">{username}</div>
          <div className="logout" onClick={this.logout}>
            登出
          </div>
        </div>
      );
    }
    return (
      <div className="nav-container">
        <div className="logo">AcFun</div>
        {account_dom}
      </div>
    );
  }
}
