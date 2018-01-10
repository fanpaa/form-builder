import React, {Component} from "react";
import {Layout, Input} from 'antd';
const {Sider} = Layout;
const {TextArea} = Input;
class c extends Component {
  render() {
    const {card, handleChangeCard} = this.props;
    let pp;

    pp = Object
      .keys(card.meta)
      .map((key, index) => {
        if (typeof card.meta[key] === "object") {
          return (
            <label key={index}>
              属性:{key}
              <TextArea
                autosize={{
                minRows: 3
              }}
                value={JSON.stringify(card.meta[key]) || ""}
                onChange={e => handleChangeCard(e, card.id, key)}/>
            </label>
          );
        } else {
          return (
            <label key={index}>
              属性:{key}
              <Input
                value={card.meta[key] || ""}
                onChange={e => handleChangeCard(e, card.id, key)}/>
            </label>
          );
        }
      });

    return (
      <Sider width={250} style={{
        background: '#fff',
        padding:'15px'
      }}>
        <p>
          当前编辑块: {card.component}-{card.id}
        </p>
        {pp}
      </Sider>
    );
  }
}

export default c;
