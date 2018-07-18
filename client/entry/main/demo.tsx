import React from 'react';
export default class Demo2 extends React.Component<{
  type: string;
}> {
  render() {
    return <div>async:{this.props.type}</div>;
  }
}
