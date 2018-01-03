import React, { Component } from "react";
import { Rate } from "antd";

class RateC extends Component {
  render() {
    const { meta } = this.props;
    return (
        <Rate allowHalf defaultValue={meta.defaultValue}/>
    );
  }
}

export default RateC;
