import React, { Component } from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";
import Card from "./Card";
import ItemTypes from "./ItemTypes";
import ReactJson from "react-json-view";

// import TitleInput from "./TitleInput";
import Header from "./Header";
// import ZRadio from "./ZRadio";
// import ZDate from "./ZDate";
// import ZSelect from "./ZSelect";
import { Input, DatePicker, TimePicker, Select, Divider, Radio } from "antd";
const RadioGroup = Radio.Group;
const Option = Select.Option;
const stageTarget = {
  drop(props, monitor) {
    props.handleDrop(monitor.getItem());
  }
};

class Container extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired
  };

  renderDynamicComponent(meta, component) {
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

  render() {
    const {
      connectDropTarget,
      cards,
      moveCard,
      findCard,
      handleDrop,
      handleEdit,
      handleDelete
    } = this.props;

    let rr;
    if (cards.length > 0) {
      rr = cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          moveCard={moveCard}
          findCard={findCard}
          handleDrop={handleDrop}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        >
          {card.meta.label ? (
            <label style={{ display: "inline-block", width: "100px" }}>
              {card.meta.label}:{" "}
            </label>
          ) : null}
          {this.renderDynamicComponent(card.meta, card.component)}
        </Card>
      ));
    } else {
      rr = (
        <p
          style={{
            width: "100%",
            height: "200px",
            textAlign: "center",
            fontSize: "32px"
          }}
        >
          ➡拖入左侧块
        </p>
      );
    }

    return connectDropTarget(
      <div style={{ minHeight: "100vh", paddingRight: "50px" }}>
        {rr}
        <Divider />
        <h5>工程JSON:</h5>
        {/* <code>{JSON.stringify(cards)}</code> */}
        <ReactJson src={cards} />

      </div>
    );
  }
}

export default DropTarget(
  [ItemTypes.BOX, ItemTypes.CARD],
  stageTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(Container);
