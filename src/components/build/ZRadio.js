import React, { Component } from "react";
import { Radio } from "antd";

const RadioGroup = Radio.Group;
class ZRadio extends Component {
  // state = {
  //   value: this.props.meta.value
  // };
  onChange = e => {
    console.log("radio checked", e.target.value);
    // this.setState({
    //   value: e.target.value
    // });
  };
  componentWillReceiveProps(nextProps){
    // this.setState({
    //   value: nextProps.meta.value
    // });
  }
  render() {
    console.log(this.props)
    return (
      <RadioGroup
        options={this.props.meta.options}
        onChange={this.onChange}
        value={this.props.meta.value}
      />
    );
  }
}

export default ZRadio;
