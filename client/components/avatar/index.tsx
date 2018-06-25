import React from 'react';
import './index.less';
import classnames from 'classnames';
export default class Avatar extends React.Component<{
  src: string;
  className: string;
  width?: number;
  height?: number;
}> {
  render() {
    const { className, width, height, src } = this.props;
    const cls = classnames('avatar', {
      [className]: !!className
    });
    return <img className={cls} src={src} width={width} height={height} />;
  }
}
