import * as React from 'react';
import classnames from 'classnames';
import omit from 'omit.js';
import './index.less';

export default class Icon extends React.PureComponent<{
  prefix?: string;
  className?: string;
  spin?: boolean;
  onClick?: React.ReactEventHandler;
  type: string;
}> {
  static defaultProps = {
    prefix: 'topfeed-icon',
    className: '',
    spin: false,
    onClick: () => {}
  };
  render() {
    const { prefix, className, spin, type } = this.props;
    const iconClass = classnames(prefix, {
      [className]: !!className,
      [`${prefix}-spin`]: !!spin || type === 'loading',
      [`${prefix}-${type}`]: true
    });
    return <i {...omit(this.props, ['type', 'spin'])} className={iconClass} />;
  }
}
