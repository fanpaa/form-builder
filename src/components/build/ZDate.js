import React, { Component } from "react";
import { DatePicker } from "antd";
import moment from 'moment';

function onChange(date, dateString) {
  console.log(date, dateString);
}

class ZDate extends Component {
  render() {
    const { meta } = this.props;
    return <DatePicker onChange={onChange} value={moment(meta.value)}/>;
  }
}

export default ZDate;
