import React, { Component } from "react";
import { Input } from "antd";
const Search = Input.Search;

class TitleInput extends Component {
  render() {
    const { meta } = this.props;
    return (
      <div>
        <Search
          placeholder={meta.placeholder}
          onSearch={value => console.log(value)}
          enterButton
        />
      </div>
    );
  }
}

export default TitleInput;
