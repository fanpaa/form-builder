import React, { Component } from "react";

class Header extends Component {
  render() {
    const { meta } = this.props;
    let hh;
    if (meta.size === "large") {
      hh = <h3>{meta.text}</h3>;
    } else {
      hh = <h4>{meta.text}</h4>;
    }
    return <div>{hh}</div>;
  }
}

export default Header;
