import React from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const c = () => (
  <Header
    style={{
      position: "fixed",
      width: "100%",
      zIndex:10,
      padding: 0,
      backgroundColor: "#fff"
    }}
  >
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "62px" }}
    >
      <Menu.Item key="1">建立</Menu.Item>
      <Menu.Item key="2">设置</Menu.Item>
      <Menu.Item key="3">发布</Menu.Item>
    </Menu>
  </Header>
);

export default c;
