import React, { Component } from "react";
import update from "immutability-helper";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import PrimaryHeader from "../components/build/primaryHeader";
import SecondaryHeader from "../components/build/secondaryHeader";
import LeftPanel from "../components/build/leftPanel";
import RightPanel from "../components/build/rightPanel";
import StageContainer from "../components/build/stageContainer";

class Build extends Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.moveCard = this.moveCard.bind(this);
    this.findCard = this.findCard.bind(this);
    this.state = {
      cards: [
        {
          id: 1,
          component: "TitleInput",
          meta: {
            placeholder: "Write a cool JS library"
          }
        },
        {
          id: 2,
          component: "Rate",
          meta: {
            defaultValue: 3.5
          }
        },
        {
          id: 3,
          component: "TitleInput",
          meta: {
            placeholder: "Write README"
          }
        }
      ]
    };
  }
  render() {
    const { cards } = this.state;
    return (
      <div>
        <PrimaryHeader />
        <SecondaryHeader />
        <StageContainer
          cards={cards}
          moveCard={this.moveCard}
          findCard={this.findCard}
          handleDrop={this.handleDrop}
          handleEdit={this.handleEdit}
        />
        <LeftPanel />
        <RightPanel />
      </div>
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

  handleDrop(item) {
    if (!item.meta) return;

    const { cards } = this.state;
    const _id = cards.length + 1;
    this.setState(
      update(this.state, {
        cards: {
          $push: [
            {
              id: _id,
              component: item.component,
              meta: {
                placeholder: "",
                defaultValue: 0
              }
            }
          ]
        }
      })
    );
  }

  handleEdit(id) {
    console.log(this.findCard(id))
  }
}

export default DragDropContext(HTML5Backend)(Build);
