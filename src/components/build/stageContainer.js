import React, { Component } from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";
import Card from "./Card";
import ItemTypes from "./ItemTypes";

import TitleInput from "./TitleInput";
import Rate from "./Rate";

const style = {
  width: 400,
  margin: "0 auto",
  paddingTop: "80px"
};

const stageTarget = {
  drop(props, monitor) {
    props.handleDrop(monitor.getItem())
  }
};

class Container extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired
  };

  renderDynamicComponent(component, meta) {
    const d = {
      TitleInput: <TitleInput meta={meta}/>,
      Rate: <Rate meta={meta}/>
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
      handleEdit
    } = this.props;

    return connectDropTarget(
      <div style={style}>
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            moveCard={moveCard}
            findCard={findCard}
            handleDrop={handleDrop}
            handleEdit={handleEdit}
          >
            {this.renderDynamicComponent(card.component, card.meta)}
          </Card>
        ))}

        <hr/>
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
