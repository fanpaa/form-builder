import React, { Component } from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;

class CC extends Component {
  handleClick(item, key, keyPath) {
    console.log(item, key, keyPath);
    if (item.key === "3") {
      window.open(`/#/preview?data=${JSON.stringify(this.props.cards)}`,
      "_blank");
    }
  }
  render() {
    return (
      <Header className="header">
        <div className="logo">ZForm-core</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            lineHeight: "64px"
          }}
          onClick={this.handleClick.bind(this)}
        >
          <Menu.Item key="1">建立</Menu.Item>
          {/* <Menu.Item key="2">设置</Menu.Item> */}
          <Menu.Item key="3">预览</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default CC;
