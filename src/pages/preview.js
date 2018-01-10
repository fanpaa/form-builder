import React from "react";
import {
  Divider,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Radio,
  Select
} from "antd";
import Header from "../components/build/Header";
import ReactJson from "react-json-view";
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

// const ComponentMap = {
//   Input,
//   DatePicker,
//   TitleInput: <TitleInput meta={meta} />,
//   Rate: <Rate meta={meta} />,
//   Header: <Header meta={meta} />,
//   ZDate: <ZDate meta={meta} />,
//   ZSelect: <ZSelect meta={meta} />,
//   ZRadio: <ZRadio meta={meta} />
// };

function renderDynamicComponent(meta, component) {
  let tag;
  switch (component) {
    case "Input":
      tag = <Input meta={meta} />;
      break;
    case "DatePicker":
      tag = <DatePicker meta={meta} />;
      break;
    case "TimePicker":
      tag = <TimePicker meta={meta} />;
      break;
    case "Header":
      tag = <Header meta={meta} />;
      break;
    case "Divider":
      tag = <Divider />;
      break;
    case "Radio":
      tag = (
        <RadioGroup>
          {meta.options.map((r, i) => {
            return (
              <Radio key={i} value={r.value}>
                {r.label}
              </Radio>
            );
          })}
        </RadioGroup>
      );
      break;
    case "Select":
      tag = (
        <Select
          placeholder="Please select a country"
          style={{ width: "200px" }}
        >
          {meta.options.map((r, i) => {
            return (
              <Option key={i} value={r.value}>
                {r.label}
              </Option>
            );
          })}
        </Select>
      );
      break;
    default:
      tag = <div />;
      break;
  }
  return tag;
}

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    my_json_object: {}
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.setState({ my_json_object: JSON.parse(JSON.stringify(values)) });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const params = new URLSearchParams(this.props.location.search);
    const formData = JSON.parse(params.get("data"));

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    const formItems = formData.map(k => {
      const tag = renderDynamicComponent(k.meta, k.component);
      const _key = k.meta.key || `preview_${k.id}`;
      return (
        <FormItem {...formItemLayout} label={k.meta.label} key={k.id}>
          {getFieldDecorator(_key, {
            rules: []
          })(tag)}
        </FormItem>
      );
    });

    return (
      <div style={{ width: "770px", margin: "0 auto" }}>
        <Form onSubmit={this.handleSubmit} style={{ width: "570px" }}>
          {formItems}
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              生成json
            </Button>
          </FormItem>
        </Form>
        <Divider />
        <h5>生成JSON:</h5>
        <ReactJson src={this.state.my_json_object} />
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
