import React from "react";
import Cards from "./Card";
import ActionButton from "./ActionButton";

function List({ title, cards }) {
  return (
    <div style={style.root}>
      <h1>{title}</h1>

      {cards.map((card) => {
        return <Cards text={card.text} key={card.id} />;
      })}
      <ActionButton card />
    </div>
  );
}

const style = {
  root: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8,
  },
};
export default List;
