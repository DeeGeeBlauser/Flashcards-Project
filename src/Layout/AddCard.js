import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard } from "../utils/api";

function AddCard({ deck }) {
  const history = useHistory();
  const [card, setCard] = useState({});
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  const newCard = { front: cardFront, back: cardBack };
  const submitHandler = (event) => {
    event.preventDefault();
    createCard(deck.id, newCard)
      .then((response) => deck.cards.push(response))
      .then(() => setCardFront(""))
      .then(() => setCardBack(""));
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home"></span>Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>
              <span className="oi"></span>
              {deck.name}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <h3>{deck.name}: Add Card</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Front</label>
          <textarea
            className="form-control"
            id="front"
            name="front"
            type="text"
            placeholder="Front side of card"
            rows="2"
            value={cardFront}
            onChange={(event) => setCardFront(event.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="description">Back</label>
          <textarea
            className="form-control"
            id="back"
            name="back"
            placeholder="Back side of card"
            rows="2"
            value={cardBack}
            onChange={(event) => setCardBack(event.target.value)}
            required
          ></textarea>
        </div>
        <br />
        <button
          onClick={() => history.go(-1)}
          type="button"
          className="btn btn-secondary mr-2"
        >
          Done
        </button>
        <button
          onClick={() => console.log(card)}
          type="submit"
          className="btn btn-primary mr-2"
        >
          Save
        </button>
      </form>
    </>
  );
}

export default AddCard;
