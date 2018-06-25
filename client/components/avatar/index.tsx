import React from 'react';
import './index.less';
export default class Avatar extends React.Component<{
  src: string;
}> {
  render() {
    return <img className="avatar" {...this.props} src={this.props.src} />;
  }
}
