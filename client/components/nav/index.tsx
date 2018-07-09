import React from 'react';
import * as URL from 'constants/api/topfeed';
import http from 'lib/http';
import * as Path from 'constants/path';
import { Avatar } from 'antd';
//import Avatar from 'components/avatar';
import { Link } from '@reach/router';
import { Popover, message } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Select } from 'antd';
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
    const { update_locale } = this.props;
    update_locale(value);
  };
  render() {
    const { username, avatar } = this.props.user_info;
    const { locale } = this.props;
    let account_dom = null;
    if (!username) {
      account_dom = (
        <div className="account-container">
          <a className="signin" href="/signin">
            <FormattedMessage id="signin" />
          </a>
          <a className="signup" href="/signup">
            <FormattedMessage id="signup" />
          </a>
        </div>
      );
    } else {
      account_dom = (
        <div className="account-container">
          <Popover
            content={
              <div className="account-tip">
                <Link to={Path.studio} className="tip-item">
                  <FormattedMessage id="studio" />
                </Link>
                <div className="tip-item logout" onClick={this.logout}>
                  <FormattedMessage id="signout" />
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
          <Link className="logo" to={Path.feed}>
            <FormattedMessage id="logo_name" />
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
