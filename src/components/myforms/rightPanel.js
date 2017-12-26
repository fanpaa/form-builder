import React from "react";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;

const c = () => (
  <Sider
    style={{
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      right: 0,
      top: "64px"
    }}
  >
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
      <Menu.Item key="1">
        <Icon type="user" />
        <span className="nav-text">配色方案</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        <span className="nav-text">页面颜色</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span className="nav-text">表格颜色</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="bar-chart" />
        <span className="nav-text">字体颜色</span>
      </Menu.Item>
      <Menu.Item key="5">
        <Icon type="cloud-o" />
        <span className="nav-text">问题间距</span>
      </Menu.Item>
      <Menu.Item key="6">
        <Icon type="appstore-o" />
        <span className="nav-text">字体</span>
      </Menu.Item>
      <Menu.Item key="7">
        <Icon type="team" />
        <span className="nav-text">按钮样式</span>
      </Menu.Item>
      <Menu.Item key="8">
        <Icon type="shop" />
        <span className="nav-text">自定义css</span>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default c;
