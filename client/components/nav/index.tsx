import React from 'react';
import * as URL from 'constants/api/topfeed';
import http from 'lib/http';
import { Link } from '@reach/router';
import { message, Tooltip, Popover } from 'antd';
import { connect } from 'react-redux';
import './index.less';

class Nav extends React.Component<{
  user_info: any;
}> {
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
    const { username } = this.props.user_info;
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
          <Popover
            content={
              <div className="account-tip">
                <Link to={'/studio'} className="tip-item">
                  studio
                </Link>
                <div className="tip-item logout" onClick={this.logout}>
                  登出
                </div>
              </div>
            }
          >
            <div className="username">{username}</div>
          </Popover>
        </div>
      );
    }
    return (
      <div className="nav-container">
        <div className="nav-main">
          <div className="logo">AcFun</div>
          {account_dom}
        </div>
      </div>
    );
  }
}
const mapState = state => {
  console.log('state:', state);
  return {
    user_info: state.user_info
  };
};
const mapDispatch = state => {
  return {
    update: state.user_info.update
  };
};

export default connect(
  mapState,
  mapDispatch
)(Nav);
