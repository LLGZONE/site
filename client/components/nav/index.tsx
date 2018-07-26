import React from 'react';
import * as URL from 'constants/api/topfeed';
import http from 'lib/http';
import { Avatar } from 'antd';
//import Avatar from 'components/avatar';
import { Link } from '@reach/router';
import { Popover, message } from 'antd';
import intl from 'react-intl-universal';
import Cookies from 'js-cookie';
import { Select } from 'antd';
import Icon from 'ui/icon';
import { connect } from 'react-redux';
import './index.less';

class Nav extends React.Component<{
  user_info: any;
  locale: string;
  update_locale: (locale: string) => void;
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
  changeLocale = value => {
    Cookies.set('locale', value);
    Cookies.set('language', value);
    location.reload();
  };
  render() {
    const { username, avatar } = this.props.user_info;
    const { locale } = this.props;
    let account_dom = null;
    if (!username) {
      account_dom = (
        <div className="account-container">
          <a className="signin" href="/signin">
            {intl.get('signin')}
          </a>
          <a className="signup" href="/signup">
            {intl.get('signup')}
          </a>
        </div>
      );
    } else {
      account_dom = (
        <div className="account-container">
          <Popover
            content={
              <div className="account-tip">
                <Link to={'/studio/detail'} className="tip-item">
                  {intl.get('i18n')}
                </Link>
                <Link to={'/studio/'} className="tip-item">
                  {intl.get('studio')}
                </Link>
                <div className="tip-item logout" onClick={this.logout}>
                  {intl.get('signout')}
                </div>
              </div>
            }
          >
            <Avatar src={avatar} className="username" />
          </Popover>
        </div>
      );
    }
    return (
      <div className="nav-container">
        <div className="nav-main">
          <Link className="logo" to={'/studio/feed'}>
            <Icon type="quora" />
            <div className="logo-name">{intl.get('logo_name')}</div>
          </Link>
          <div className="nav-right">
            {account_dom}
            <Select
              className="select-lang"
              onChange={this.changeLocale}
              defaultValue={locale}
            >
              <Select.Option value={'en'}>en</Select.Option>
              <Select.Option value={'zh'}>zh</Select.Option>
            </Select>
          </div>
        </div>
      </div>
    );
  }
}
const mapState = (state: any) => {
  return {
    user_info: state.user_info,
    locale: state.locale.locale
  };
};
const mapDispatch = (state: any) => {
  return {
    update_userinfo: state.user_info.update,
    update_locale: state.locale.update_locale
  };
};

export default connect(
  mapState,
  mapDispatch
)(Nav);
