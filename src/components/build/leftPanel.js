import React, { Component } from "react";
import Box from "./Box";

class LeftPanel extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          position: "fixed",
          left: 0,
          top: "64px",
          width: "200px",
          padding: "10px"
        }}
      >
        <Box
          meta={{
            text: "",
            size:'large'
          }}
          name="Header标题"
          component="Header"
        />
        <Box
          meta={{
            placeholder: "",
            value:""
          }}
          name="Input输入框"
          component="TitleInput"
        />
        {/* <Box
          meta={{
            defaultValue: 0
          }}
          name="Rate评分"
          component="Rate"
        /> */}
        <Box
          meta={{
            value: '3',
            options:[
              { label: "航旅", value: "1" },
              { label: "车险", value: "2" },
              { label: "健康险", value: "3" }
            ]
          }}
          name="Radio单选框"
          component="ZRadio"
        />
      </div>
    );
  }
}

export default LeftPanel;
