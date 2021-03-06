import React, { Component } from "react";
import Box from "./Box";
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
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
          defaultOpenKeys={["sub1", "sub2"]}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="layout" />
                <span>布局</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Box
                meta={{
                  text: "Header",
                  size: "large"
                }}
                name="标题"
                component="Header"
              />
            </Menu.Item>
            <Menu.Item key="221">
              <Box meta={{}} name="分割线" component="Divider" />
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>组件</span>
              </span>
            }
          >
            <Menu.Item key="6">
              <Box
                meta={{
                  label: "antInput",
                  key: "test2",
                  rules: []
                }}
                name="输入框"
                component="Input"
              />
            </Menu.Item>
            <Menu.Item key="56">
              <Box
                meta={{
                  label: "antInputNumber",
                  key: "test2",
                  rules: []
                }}
                name="数字输入框"
                component="InputNumber"
              />
            </Menu.Item>
            <Menu.Item key="58">
              <Box
                meta={{
                  label: "TextArea",
                  key: "test212",
                  rows: 4, //todo  字符串转数字
                  rules: []
                }}
                name="文本域"
                component="TextArea"
              />
            </Menu.Item>
            <Menu.Item key="7">
              <Box
                meta={{
                  label: "antDatePicker",
                  key: "test3",
                  rules: []
                }}
                name="日期选择器"
                component="DatePicker"
              />
            </Menu.Item>
            <Menu.Item key="8">
              <Box
                meta={{
                  label: "antTimePicker",
                  key: "test1",
                  rules: []
                }}
                name="时间选择器"
                component="TimePicker"
              />
            </Menu.Item>
            <Menu.Item key="9">
              <Box
                meta={{
                  label: "antRadio",
                  key: "testRadio",
                  options: [
                    {
                      label: "jack",
                      value: "jack"
                    },
                    {
                      label: "lucy",
                      value: "lucy"
                    },
                    {
                      label: "tom",
                      value: "tom"
                    }
                  ],
                  rules: []
                }}
                name="单选框"
                component="Radio"
              />
            </Menu.Item>
            <Menu.Item key="39">
              <Box
                meta={{
                  label: "Checkbox",
                  key: "testCheckbox",
                  options: [
                    { label: "Apple", value: "Apple" },
                    { label: "Pear", value: "Pear" },
                    { label: "Orange", value: "Orange" }
                  ],
                  rules: []
                }}
                name="多选框"
                component="Checkbox"
              />
            </Menu.Item>
            <Menu.Item key="19">
              <Box
                meta={{
                  label: "antSelect",
                  key: "testSelect",
                  options: [
                    {
                      label: "China",
                      value: "china"
                    },
                    {
                      label: "U.S.A",
                      value: "usa"
                    },
                    {
                      label: "UK",
                      value: "uk"
                    }
                  ],
                  rules: []
                }}
                name="下拉框"
                component="Select"
              />
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default LeftPanel;
