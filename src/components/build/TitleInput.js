import React, { Component } from "react";
import { Input } from "antd";

class TitleInput extends Component {
  handleOnPressEnter(e){
    console.log(e.target.value)
  }
  render() {
    const { meta } = this.props;
    return (
      <div>
        <Input
          placeholder={meta.placeholder} value={meta.value} onPressEnter={this.handleOnPressEnter.bind(this)}
        />
      </div>
    );
  }
}

export default TitleInput;
