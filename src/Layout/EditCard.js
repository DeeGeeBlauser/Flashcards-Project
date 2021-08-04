import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readCard } from "../utils/api";
import { updateCard } from "../utils/api";

function EditCard({ deck }) {
  const history = useHistory();
  const cardId = useParams().cardId;
  const [card, setCard] = useState({ front: "", back: "" });

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchCard() {
      try {
        const currentCard = await readCard(cardId, abortController.signal);
        setCard(currentCard);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCard();

    return () => {
      abortController.abort();
    };
  }, [cardId]);

  const submitHandler = (event) => {
    event.preventDefault();
    updateCard(card)
      .then((response) => {
        card.front = response.front;
        card.back = response.back;
      })
      .then(history.push(`/decks/${deck.id}`))
      .catch(console.log);
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
            Edit Card {card.id}
          </li>
        </ol>
      </nav>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Front</label>
          <textarea
            className="form-control"
            id="front"
            name="front"
            type="text"
            rows="2"
            value={card.front}
            onChange={(event) =>
              setCard({ ...card, front: event.target.value })
            }
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="description">Back</label>
          <textarea
            className="form-control"
            id="back"
            name="back"
            rows="2"
            value={card.back}
            onChange={(event) => setCard({ ...card, back: event.target.value })}
            required
          ></textarea>
        </div>
        <br />
        <button
          onClick={() => history.go(-1)}
          type="button"
          className="btn btn-secondary mr-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary mr-2"
        >
          Save
        </button>
      </form>
    </>
  );
}

export default EditCard;
