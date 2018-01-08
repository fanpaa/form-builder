import React, {Component} from "react";
import update from "immutability-helper";
import {DragDropContext} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import PrimaryHeader from "../components/build/primaryHeader";
import SecondaryHeader from "../components/build/secondaryHeader";
import LeftPanel from "../components/build/leftPanel";
import RightPanel from "../components/build/rightPanel";
import StageContainer from "../components/build/stageContainer";

import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;

let uniqueId = 0;

class Build extends Component {
  constructor(props) {
    super(props);
    this.handleDrop = this
      .handleDrop
      .bind(this);
    this.handleEdit = this
      .handleEdit
      .bind(this);
    this.handleDelete = this
      .handleDelete
      .bind(this);
    this.handleChangeCard = this
      .handleChangeCard
      .bind(this);

    this.moveCard = this
      .moveCard
      .bind(this);
    this.findCard = this
      .findCard
      .bind(this);
    this.state = {
      cards: [],
      rightPanel: {
        meta: {}
      }
    };
  }
  componentWillMount() {
    uniqueId = this.state.cards.length;
  }
  render() {
    const {cards} = this.state;
    return (
      <Layout>
        <PrimaryHeader/>
        <SecondaryHeader/>
        <Layout>
          <LeftPanel/>
          <Layout style={{
            padding: '0 24px 24px'
          }}>
            <Breadcrumb style={{
              margin: '16px 0'
            }}>
              <Breadcrumb.Item>Path</Breadcrumb.Item>
              <Breadcrumb.Item>To</Breadcrumb.Item>
              <Breadcrumb.Item>This</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280
            }}>
              <StageContainer
                cards={cards}
                moveCard={this.moveCard}
                findCard={this.findCard}
                handleDrop={this.handleDrop}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}/>
            </Content>
          </Layout>

          <RightPanel
            card={this.state.rightPanel}
            handleChangeCard={this.handleChangeCard}/>
        </Layout>
      </Layout>
    );
  }

  moveCard(id, atIndex) {
    const {card, index} = this.findCard(id);
    this.setState(update(this.state, {
      cards: {
        $splice: [
          [
            index, 1
          ],
          [atIndex, 0, card]
        ]
      }
    }));
  }

  findCard(id) {
    const {cards} = this.state;
    const card = cards.filter(c => c.id === id)[0];

    return {
      card,
      index: cards.indexOf(card)
    };
  }

  handleDrop(item) {
    if (!item.meta) 
      return;
    let _id = uniqueId++;
    this.setState(update(this.state, {
      cards: {
        $push: [
          {
            id: _id,
            component: item.component,
            meta: item.meta
          }
        ]
      }
    }));
  }

  handleEdit(e, id) {
    console.log("build", this.findCard(id));
    this.setState({
      rightPanel: this
        .findCard(id)
        .card
    });
  }
  handleDelete(e, id) {
    let index = this
      .findCard(id)
      .index;
    this.setState(update(this.state, {
      cards: {
        $splice: [
          [index, 1]
        ]
      }
    }));
  }

  handleChangeCard(event, id, key) {
    console.log("handleChangeCard-------");
    console.log(this.findCard(id));
    let n = this
      .findCard(id)
      .card;
    let index = this
      .findCard(id)
      .index;
    console.log("handleChangeCard", event.target.value);
    //todo
    if (key === "defaultValue") {
      n.meta[key] = +event.target.value;
    } else if (key === "options") {
      try {
        n.meta[key] = JSON.parse(event.target.value);
      } catch (e) {}
    } else {
      n.meta[key] = event.target.value;
    }
    console.log(n);
    this.setState(update(this.state, {
      cards: {
        $splice: [
          [index, 1, n]
        ]
      }
    }));
  }
}

export default DragDropContext(HTML5Backend)(Build);
