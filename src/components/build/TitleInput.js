import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
const Search = Input.Search;

class TitleInput extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };
  render() {
    const { text } = this.props;
    return (
      <div>
        <Search
          placeholder={text}
          onSearch={value => console.log(value)}
          enterButton
        />
      </div>
    );
  }
}

export default TitleInput;
