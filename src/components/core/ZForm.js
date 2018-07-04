import React, { Component } from "react";
import { Form, Select, Input, DatePicker, Divider } from "antd";
import axios from "../utils/intercept";

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class ZForm extends Component {
  state = {
    formConfig: this.props.formConfig
  };

  getComponent = config => {
    let tag;
    switch (config.component) {
      case "Input":
        tag = (
          <Input
            placeholder={config.placeholder}
            disabled={!!config.disabled}
            type={config.type ? config.type : "text"}
          />
        );
        break;
      case "TextArea":
        tag = <TextArea placeholder={config.placeholder} rows={4} />;
        break;
      case "DatePicker":
        tag = <DatePicker style={{ width: "100%" }} />;
        break;
      case "Divider":
        tag = <Divider key={config.placeholder}>{config.placeholder}</Divider>;
        break;
      case "Select":
        tag = (
          <Select
            disabled={config.disabled}
            mode={config.mode}
            allowClear={true}
            placeholder={config.placeholder}
            style={{
              width: "100%"
            }}
            onChange={
              config.cascader
                ? value => this.handleFieldChange(value, config)
                : null
            }
          >
            {config.options.map((r, i) => {
              return (
                <Option
                  key={i}
                  disabled={!!r.disabled}
                  value={
                    typeof r.value !== "undefined"
                      ? r.value
                      : config.mode
                        ? r[config.resMap.value].toString()
                        : r[config.resMap.value]
                  }
                >
                  {typeof r.label !== "undefined"
                    ? r.label
                    : r[config.resMap.label]}
                </Option>
              );
            })}
          </Select>
        );
        break;
      default:
        tag = null;
    }
    return tag;
  };

  renderFields = () => {
    const formItemLayout = {
      labelCol: {
        span: 10
      },
      wrapperCol: {
        span: 14
      }
    };
    const taItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      }
    };
    const formConfig = this.state.formConfig;
    const { getFieldDecorator } = this.props.form;
    return formConfig.map(v => {
      const tag = this.getComponent(v.meta);
      if (v.meta.component === "Divider") {
        return tag;
      }
      if (v.meta.component === "TextArea") {
        return (
          <div key={v.meta.key} style={{ marginTop: "5px" }}>
            <FormItem
              style={{
                width: "100%",
                marginRight: 0
              }}
              {...taItemLayout}
              label={v.meta.label}
              key={v.meta.key}
            >
              {getFieldDecorator(v.meta.key, v.options)(tag)}
            </FormItem>
          </div>
        );
      }
      return (
        <FormItem
          style={{
            width: "50%",
            marginRight: 0
          }}
          {...formItemLayout}
          label={v.meta.label}
          key={v.meta.key}
        >
          {getFieldDecorator(v.meta.key, v.options)(tag)}
        </FormItem>
      );
    });
  };

  //普通级联
  handleFieldChange = (value, config) => {
    if (value === undefined) return;
    const formConfig = config.cascader.callback(
      value,
      config,
      this.state.formConfig
    );
    this.setState({ formConfig });
    this.props.form.setFieldsValue({
      [config.cascader.to]: undefined
    });
  };

  componentWillMount() {
    this.state.formConfig.forEach((value, index) => {
      if (value.meta.fetchUrl) {
        axios.get(value.meta.fetchUrl).then(res => {
          if (res.data.status === 200) {
            const formConfig = this.state.formConfig;
            formConfig[index].meta.options = res.data.data;
            this.setState({ formConfig });
          }
        });
      }
    });
  }

  render() {
    return (
      <Form layout="inline" style={{ marginLeft: "-20px" }}>
        {this.renderFields()}
      </Form>
    );
  }
}

export default Form.create()(ZForm);
