import React, { Component } from "react";
import Box from "./Box";
import { Layout, Menu } from "antd";
import moment from 'moment';

const { Sider } = Layout;

class LeftPanel extends Component {
  render() {
    return (
      <Sider
        width={200}
        style={{
          background: "#fff"
        }}
      >
        <Menu
          mode="inline"
          style={{
            height: "100%",
            borderRight: 0
          }}
        >
          <Menu.Item key="1">
            <Box
              meta={{
                text: "Header",
                size: "large",
                label:'标签名'
              }}
              name="标题"
              component="Header"
            />
          </Menu.Item>
          <Menu.Item key="2">
            <Box
              meta={{
                placeholder: "",
                value: "",
                label:'标签名'
              }}
              name="输入框"
              component="TitleInput"
            />
          </Menu.Item>
          <Menu.Item key="3">
            <Box
              meta={{
                value: "3",
                options: [
                  {
                    label: "航旅",
                    value: "1"
                  },
                  {
                    label: "车险",
                    value: "2"
                  },
                  {
                    label: "健康险",
                    value: "3"
                  }
                ],
                label:'标签名'
              }}
              name="单选框"
              component="ZRadio"
            />
          </Menu.Item>
          <Menu.Item key="4">
            <Box
              meta={{
                value: moment(new Date()).format('YYYY-MM-DD'),
                label:'标签名'
              }}
              name="日期选择框"
              component="ZDate"
            />
          </Menu.Item>
          <Menu.Item key="5">
            <Box
              meta={{
                value: "1",
                options: [
                  {
                    label: "jack",
                    value: "1"
                  },
                  {
                    label: "lucy",
                    value: "2"
                  },
                  {
                    label: "topo",
                    value: "3"
                  }
                ],
                label:'标签名'
              }}
              name="选择器"
              component="ZSelect"
            />
          </Menu.Item>
          <Menu.Item key="6">
            <Box
              meta={{
                label:'antInput',
                key:'test2'
              }}
              name="input"
              component="Input"
            />
          </Menu.Item>
          <Menu.Item key="7">
            <Box
              meta={{
                label:'antDatePicker',
                key:'test3'
              }}
              name="DatePicker"
              component="DatePicker"
            />
          </Menu.Item>
          <Menu.Item key="8">
            <Box
              meta={{
                label:'antTimePicker',
                key:'test1'
              }}
              name="TimePicker"
              component="TimePicker"
            />
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default LeftPanel;
