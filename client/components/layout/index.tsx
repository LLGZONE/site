import React from 'react';
import classnames from 'classnames';
import { BackTop } from 'antd';
import Nav from 'components/nav';
import './index.less';
export default class Layout extends React.Component<{
  children: React.ReactNode;
  className?: string;
}> {
  static defaultProps = {
    className: ''
  };
  render() {
    const { className } = this.props;
    return (
      <div className={classnames('layout-container', className)}>
        <Nav />
        <div className="stage-container">{this.props.children}</div>
        <BackTop />
      </div>
    );
  }
}
