import * as React from 'react';
import { Link } from '@reach/router';
import classnames from 'classnames';
import omit from 'omit.js';

export default class NavLink extends React.Component<{
  [key: string]: any;
  index?: boolean;
}> {
  static defaultProps = {
    index: false
  };
  render() {
    return (
      <Link
        getProps={({ isCurrent, location, href, isPartiallyCurrent }) => {
          const cls = isCurrent
            ? classnames('active', this.props.className)
            : this.props.className;
          return {
            className: cls
          };
        }}
        {...omit(this.props, ['className', 'index'])}
      />
    );
  }
}
