import React from 'react';
import Layout from 'components/layout';
import { Menu } from 'antd';
import { Link, Router } from '@reach/router';
import intl from 'react-intl-universal';
import Post from './post';
import Settings from './setting';
import './index.less';

class Studio extends React.Component {
  render() {
    return (
      <Layout>
        <div className="studio-container">
          <div className="studio-menu">
            <Menu>
              <Menu.Item>
                <Link to={'/studio/post'}>{intl.get('write_blog')}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={'/studio/settings'}>
                  {intl.get('account_setting')}
                </Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="studio-stage">
            <Router>
              <Post path="post" />
              <Settings path="settings/*" />
            </Router>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Studio;
