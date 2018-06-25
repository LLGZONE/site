import React from 'react';
import Layout from 'components/layout';
import { Menu } from 'antd';
import { Link, Router } from '@reach/router';
import * as Path from 'constants/path';
import Routers from './router';
import Post from './post';
import Settings from './setting';
import './index.less';

export default class Studio extends React.Component {
  render() {
    return (
      <Layout>
        <div className="studio-container">
          <div className="studio-menu">
            <Menu>
              <Menu.Item>
                <Link to={'post'}>写博客</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={'settings'}>个人设置</Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="studio-stage">
            <Router>
              <Post path="post" />
              <Settings path="settings" />
            </Router>
          </div>
        </div>
      </Layout>
    );
  }
}
