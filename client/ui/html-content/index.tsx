import React from 'react';

export default class HtmlContent extends React.Component<{
  component?: string;
  className?: string;
  children: React.ReactNode;
}> {
  static defaultProps = {
    component: 'div',
    className: ''
  };
  render() {
    const { component, children, className } = this.props;
    return React.createElement(component, {
      className,
      dangerouslySetInnerHTML: {
        __html: children
      }
    });
  }
}
