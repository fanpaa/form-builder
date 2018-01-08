import React from "react";
import {Layout, Menu} from 'antd';
const {Header} = Layout;

const c = () => (
  <Header className="header">
    <div className="logo">ZForm-core</div>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{
      lineHeight: '64px'
    }}>
      <Menu.Item key="1">建立</Menu.Item>
      <Menu.Item key="2">设置</Menu.Item>
      <Menu.Item key="3">发布</Menu.Item>
    </Menu>
  </Header>
);

export default c;
