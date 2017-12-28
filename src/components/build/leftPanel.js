import React from "react";
import { Layout, Menu, Icon } from "antd";
const { Sider } = Layout;

const c = () => (
  <Sider
    style={{
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: "64px"
    }}
  >
    <div className="logo" />
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1">
        <Icon type="user" />
        <span className="nav-text">标题</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        <span className="nav-text">姓名</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span className="nav-text">Email</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="bar-chart" />
        <span className="nav-text">地址</span>
      </Menu.Item>
      <Menu.Item key="5">
        <Icon type="cloud-o" />
        <span className="nav-text">电话</span>
      </Menu.Item>
      <Menu.Item key="6">
        <Icon type="appstore-o" />
        <span className="nav-text">日期选择器</span>
      </Menu.Item>
      <Menu.Item key="7">
        <Icon type="team" />
        <span className="nav-text">时间</span>
      </Menu.Item>
      <Menu.Item key="8">
        <Icon type="shop" />
        <span className="nav-text">提交</span>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default c;
