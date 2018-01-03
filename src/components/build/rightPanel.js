import React, { Component } from "react";

class c extends Component {
  render() {
    const { card, handleChangeCard } = this.props;
    console.log("right render", card);
    let pp;
    if (card.component === 'TitleInput') {
      pp = (
        <label>
          {" placeholder "}
          <input
            value={card.meta.placeholder || ""}
            onChange={e => handleChangeCard(e, card.id,'placeholder')}
          />
        </label>
      );
    } else if (card.component === 'Rate') {
      pp = (
        <label>
          {" defaultValue "}
          <input
            value={card.meta.defaultValue || 0}
            onChange={e => handleChangeCard(e, card.id,'defaultValue')}
          />
        </label>
      );
    }

    return (
      <div
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          right: 0,
          top: "64px"
        }}
      >
        <p>edit card id: {card.id}</p>
        {pp}
      </div>
    );
  }
}

export default c;
