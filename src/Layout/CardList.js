import React from "react";
import Card from "./Card";

function CardList({ cards }) {
  const cardList = cards.map((card, index) => <Card key={index} card={card} />);
  return <div>{cardList}</div>;
}

export default CardList;
