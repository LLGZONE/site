import React from 'react';
import classnames from 'classnames';
import Nav from '../nav';
import './index.less';

export default class Layout extends React.Component<{
  children: React.ReactNode;
  className?: string;
}> {
  static defaultProps = {
    className: ''
  };
  componentDidCatch(err) {
    console.log(err);
  }
  render() {
    const { className } = this.props;
    return (
      <div className={classnames('layout-container', className)}>
        <Nav />
        <div className="stage-container">{this.props.children}</div>
      </div>
    );
  }
}
