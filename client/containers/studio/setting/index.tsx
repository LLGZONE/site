import React from 'react';
import { Redirect, Router } from '@reach/router';
import NavLink from 'ui/nav-link';
import AccountInfo from './account-info';
import AccountSetting from './account-setting';
import './index.less';

export default class Setting extends React.Component<{
  path: string;
}> {
  validate() {}
  render() {
    return (
      <div className="setting-container">
        <div className="setting-tab">
          <div className="tab-list">
            <NavLink to="account-info" className="tab-item">
              account-info
            </NavLink>
            <NavLink to="account-setting" className="tab-item">
              account-setting
            </NavLink>
          </div>
        </div>
        <div className="setting-pane">
          <Router>
            <AccountInfo path="/account-info" />
            <AccountSetting path="/account-setting" />
          </Router>
        </div>
      </div>
    );
  }
}
