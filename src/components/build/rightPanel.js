import React, { Component } from "react";
import { Input } from 'antd';
const { TextArea } = Input;
class c extends Component {
  render() {
    const { card, handleChangeCard } = this.props;
    console.log("right render", card);
    let pp;

    pp = Object.keys(card.meta).map((key, index) => {
      if (typeof card.meta[key] === "object") {
        return (
          <label key={index}>
            key:{key}
            <TextArea autosize={{ minRows: 2 }}
              value={JSON.stringify(card.meta[key]) || ""}
              onChange={e => handleChangeCard(e, card.id, key)}
            />
          </label>
        );
      } else {
        return (
          <label key={index}>
            key:{key}
            <Input
              value={card.meta[key] || ""}
              onChange={e => handleChangeCard(e, card.id, key)}
            />
          </label>
        );
      }
    });

    return (
      <div
        style={{
          height: "100vh",
          position: "fixed",
          right: 0,
          top: "64px",
          width: "200px",
          padding: "10px"
        }}
      >
        <p>
          当前编辑块: {card.component}-{card.id}
        </p>
        {pp}
      </div>
    );
  }
}

export default c;
