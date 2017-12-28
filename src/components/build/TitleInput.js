import React from "react";
import { Input } from "antd";
const Search = Input.Search;

const c = () => (
  <div>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      enterButton
    />
  </div>
);

export default c