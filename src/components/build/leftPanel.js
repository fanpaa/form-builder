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
            placeholder: ""
          }}
          name="➕搜索栏"
          component="TitleInput"
        />
        <Box
          meta={{
            defaultValue: 0
          }}
          name="➕评分栏"
          component="Rate"
        />
      </div>
    );
  }
}

export default LeftPanel;
