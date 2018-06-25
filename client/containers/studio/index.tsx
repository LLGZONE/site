import React from 'react';
import Layout from 'components/layout';
import { Menu } from 'antd';
import './index.less';

export default class Studio extends React.Component {
  render() {
    return (
      <Layout>
        <div className="studio-container">
          <div className="studio-menu">
            <Menu>
              <Menu.Item>写博客</Menu.Item>
              <Menu.Item>个人设置</Menu.Item>
            </Menu>
          </div>
          <div className="studio-stage">this is content</div>
        </div>
      </Layout>
    );
  }
}
