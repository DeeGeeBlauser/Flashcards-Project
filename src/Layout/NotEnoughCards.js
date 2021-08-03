import React from "react";
import {Link, useRouteMatch} from "react-router-dom"

function NotEnoughCards({ deck, cards }) {
  return (
    <>
      <h1>{deck.name}: Study</h1>
      <h2>Not enough cards.</h2>
      <p>
        You need at least 3 cards to study. There are {cards.length} cards in
        this deck.{" "}
      </p>
      <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary mr-2">
          <span className="oi oi-plus mr-1"></span>Add Cards
        </Link>
    </>
  );
}

export default NotEnoughCards;
