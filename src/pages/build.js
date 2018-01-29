import React, { Component } from "react";
import update from "immutability-helper";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import PrimaryHeader from "../components/build/primaryHeader";
import SecondaryHeader from "../components/build/secondaryHeader";
import LeftPanel from "../components/build/leftPanel";
import RightPanel from "../components/build/rightPanel";
import StageContainer from "../components/build/stageContainer";

import { Layout } from "antd";
const { Content } = Layout;

let uniqueId = 0;

class Build extends Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChangeCard = this.handleChangeCard.bind(this);

    this.moveCard = this.moveCard.bind(this);
    this.findCard = this.findCard.bind(this);
    this.state = {
      cards: [
        {
          id: 0,
          component: "Input",
          meta: {
            label: "出险人信息",
            key: "claimUserName",
            rules: [
              {
                message: "姓名过长",
                max: 32
              }
            ]
          }
        },
        {
          id: 1,
          component: "Radio",
          meta: {
            label: "您为谁理赔（关系）",
            key: "insurantType",
            options: [
              {
                label: "本人",
                value: "1"
              },
              {
                label: "配偶",
                value: "2"
              },
              {
                label: "子女",
                value: "3"
              },
              {
                label: "父母",
                value: "4"
              }
            ]
          }
        },
        {
          id: 2,
          component: "DatePicker",
          meta: {
            label: "出险日期",
            key: "accidentStartDate"
          }
        },
        {
          id: 3,
          component: "Input",
          meta: {
            label: "索赔金额",
            key: "reportAmount",
            rules: [
              {
                message: "金额过长",
                max: 12
              }
            ]
          }
        },
        {
          id: 4,
          component: "Checkbox",
          meta: {
            label: "事故类别（多选）",
            key: "accidentTypeList",
            options: [
              {
                label: "意外医疗",
                value: "1"
              },
              {
                label: "疾病医疗",
                value: "2"
              },
              {
                label: "疾病住院",
                value: "3"
              }
            ]
          }
        },
        {
          id: 5,
          component: "Radio",
          meta: {
            label: "是否已在社保或者第三方保险公司申请理赔",
            key: "isNeedClaimDivision",
            options: [
              {
                label: "是",
                value: "1"
              },
              {
                label: "否",
                value: "2"
              }
            ]
          }
        },
        {
          id: 6,
          component: "TextArea",
          meta: {
            label: "备注",
            key: "accidentDesc",
            rows: 4,
            rules: [
              {
                message: "备注过长",
                max: 254
              }
            ]
          }
        }
      ],
      rightPanel: {
        meta: {}
      }
    };
  }
  componentWillMount() {
    uniqueId = this.state.cards.length;
  }
  render() {
    const { cards } = this.state;
    return (
      <Layout>
        <PrimaryHeader />
        <SecondaryHeader cards={cards} />
        <Layout>
          <LeftPanel />
          <Layout
            style={{
              padding: "0 24px 24px"
            }}
          >
            <div
              style={{
                margin: "16px 0"
              }}
            />
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <StageContainer
                cards={cards}
                moveCard={this.moveCard}
                findCard={this.findCard}
                handleDrop={this.handleDrop}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
              />
            </Content>
          </Layout>

          <RightPanel
            card={this.state.rightPanel}
            handleChangeCard={this.handleChangeCard}
          />
        </Layout>
      </Layout>
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
    let _id = uniqueId++;
    this.setState(
      update(this.state, {
        cards: {
          $push: [
            {
              id: _id,
              component: item.component,
              meta: item.meta
            }
          ]
        }
      })
    );
  }

  handleEdit(e, id) {
    console.log("build", this.findCard(id));
    this.setState({
      rightPanel: this.findCard(id).card
    });
  }
  handleDelete(e, id) {
    let index = this.findCard(id).index;
    this.setState(
      update(this.state, {
        cards: {
          $splice: [[index, 1]]
        }
      })
    );
  }

  handleChangeCard(event, id, key) {
    console.log("handleChangeCard-------");
    console.log(this.findCard(id));
    let n = this.findCard(id).card;
    let index = this.findCard(id).index;
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
    this.setState(
      update(this.state, {
        cards: {
          $splice: [[index, 1, n]]
        }
      })
    );
  }
}

export default DragDropContext(HTML5Backend)(Build);
