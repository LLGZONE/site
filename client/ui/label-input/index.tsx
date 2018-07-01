import * as React from 'react';
import { Input } from 'antd';
import './index.less';

export default class FormItem extends React.Component<{
  label?: string;
  value: string;
  type?: string;
  [key: string]: any;
}> {
  static defaultProps = {
    type: 'text'
  };
  render() {
    const { label, type, value } = this.props;
    return (
      <div className="label-input">
        <label htmlFor={label}>{label}:</label>
        <Input type={type} value={value} {...this.props} />
      </div>
    );
  }
}
