import React, { Component } from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";
import Card from "./Card";
import ItemTypes from "./ItemTypes";

import TitleInput from "./TitleInput";
import Rate from "./Rate";
import Header from "./Header";
import ZRadio from "./ZRadio";
import ZDate from "./ZDate";
import ZSelect from "./ZSelect";
import { Divider,Input,DatePicker,TimePicker } from "antd";

const stageTarget = {
  drop(props, monitor) {
    props.handleDrop(monitor.getItem());
  }
};

class Container extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired
  };

  renderDynamicComponent(component, meta) {
    const d = {
      Input:<Input meta={meta} />,
      DatePicker:<DatePicker meta={meta} />,
      TimePicker:<TimePicker meta={meta} />,
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
          <label style={{display:'inline-block',width:'100px'}}>{card.meta.label}: </label>{" "}
          {this.renderDynamicComponent(card.component, card.meta)}
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
        <code>{JSON.stringify(cards)}</code>
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
