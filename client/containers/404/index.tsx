import React from 'react';
import Exception from 'ant-design-pro/lib/Exception';

export default class NotFound extends React.Component<{
  default: boolean;
}> {
  render() {
    return <Exception type="404" />;
  }
}
