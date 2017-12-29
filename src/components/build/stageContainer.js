import React, { Component } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
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
    console.log(monitor.getItem());
    
  }
};

class Container extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.findCard = this.findCard.bind(this);
    this.state = {
      cards: [
        {
          id: 1,
          text: "Write a cool JS library",
          component: "TitleInput"
        },
        {
          id: 2,
          text: "Make it generic enough",
          component: "Rate"
        },
        {
          id: 3,
          text: "Write README",
          component: "TitleInput"
        },
        {
          id: 4,
          text: "Create some examples",
          component: "TitleInput"
        },
        {
          id: 5,
          text: "Spam in Twitter and IRC to promote it",
          component: "Rate"
        },
        {
          id: 6,
          text: "???",
          component: "TitleInput"
        },
        {
          id: 7,
          text: "PROFIT",
          component: "TitleInput"
        }
      ]
    };
  }

  handleDrop() {
		this.setState(
      update(this.state, {
        cards: {
          $push: {
            id: 100,
            name: "add",
            component: "Rate"
          }
        }
      })
    );
	}

  moveCard(id, atIndex) {
    const { card, index } = this.findCard(id);
    this.setState(
      update(this.state, {
        cards: {
          $splice: [[index, 1], [atIndex, 0, card]]
        }
      })
    );
  }

  findCard(id) {
    const { cards } = this.state;
    const card = cards.filter(c => c.id === id)[0];

    return {
      card,
      index: cards.indexOf(card)
    };
  }

  renderDynamicComponent(component, text) {
    const d = {
      TitleInput: <TitleInput text={text} />,
      Rate: <Rate />
    };
    return d[component];
  }

  render() {
    const { connectDropTarget } = this.props;
    const { cards } = this.state;

    return connectDropTarget(
      <div style={style}>
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            moveCard={this.moveCard}
            findCard={this.findCard}
          >
            {this.renderDynamicComponent(card.component, card.text)}
          </Card>
        ))}
        <pre>code</pre>
        <code>{JSON.stringify(this.state.cards)}</code>
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
