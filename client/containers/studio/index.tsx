import React from 'react';
import Layout from 'components/layout';
import { Menu } from 'antd';

export default class Studio extends React.Component {
  render() {
    return (
      <Layout>
        <div className="topfeed-menu">
          <Menu style={{ width: 256 }}>
            <Menu.Item>发文</Menu.Item>
          </Menu>
        </div>
        <div className="topfeed-stage">this is content</div>
      </Layout>
    );
  }
}
