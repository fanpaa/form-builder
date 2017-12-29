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
          width: "200px"
        }}
      >
        <Box name="Search Bar" component='TitleInput'/>
        <Box name="Rate type1" component='Rate'/>
        <Box name="Rate" component='Rate'/>
      </div>
    );
  }
}

export default LeftPanel;
