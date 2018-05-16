import React from "react";
import Nav from "../nav";
import './index.less';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout-container">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
