import React, { Component } from "react";
import { Select } from "antd";
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class ZSelect extends Component {
  render() {
    const { meta } = this.props;
    let ops = meta.options.map((c,i) => {
      return <Option key={i} value={c.value}>{c.label}</Option>;
    });

    return (
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        {ops}
      </Select>
    );
  }
}

export default ZSelect;
