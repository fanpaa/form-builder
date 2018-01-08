import React from "react";
import { Form, Input, Button, DatePicker } from "antd";
import TitleInput from "../components/build/TitleInput";
import Rate from "../components/build/Rate";
import Header from "../components/build/Header";
import ZRadio from "../components/build/ZRadio";
import ZDate from "../components/build/ZDate";
import ZSelect from "../components/build/ZSelect";
const FormItem = Form.Item;
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

function renderDynamicComponent(meta) {
  return {
    Input,
    DatePicker,
    TitleInput: <TitleInput meta={meta} />,
    Rate: <Rate meta={meta} />,
    Header: <Header meta={meta} />,
    ZDate: <ZDate meta={meta} />,
    ZSelect: <ZSelect meta={meta} />,
    ZRadio: <ZRadio meta={meta} />
  };
}
// let formData = [
//   {
//     key:'first',
//     label: "label1",
//     component: "Input"
//   },
//   {
//     key:'ss',
//     label: "lable2",
//     component: "DatePicker"
//   }
// ];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  renderDynamicComponent(component, meta) {
    const d = {
      TitleInput: <TitleInput meta={meta} />,
      Rate: <Rate meta={meta} />,
      Header: <Header meta={meta} />,
      ZDate: <ZDate meta={meta} />,
      ZSelect: <ZSelect meta={meta} />,
      ZRadio: <ZRadio meta={meta} />
    };
    return d[component];
  }

  render() {
    console.log(this.props.location.search);

    const { getFieldDecorator } = this.props.form;
    const params = new URLSearchParams(this.props.location.search);
    const formData = JSON.parse(params.get("data"));

    console.log(formData);
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
      const tag = renderDynamicComponent(k.meta)[k.component];
      return (
        <FormItem {...formItemLayout} label={k.meta.label} key={k.id}>
          {getFieldDecorator(`t${k.id}`, {
            rules: [
              {
                required: true
              }
            ]
          })(tag)}
        </FormItem>
      );
    });

    return (
      <Form onSubmit={this.handleSubmit}>
        {formItems}
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
