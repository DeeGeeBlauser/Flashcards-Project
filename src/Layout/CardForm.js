import React, {useState} from "react";
import {useRouteMatch, useHistory} from "react-router-dom"
import { updateCard } from "../utils/api";


function CardForm({submit, cancel, card, setCard}) {
    const history = useHistory();
    // const [card, setCard] = useState({});
    // const [cardFront, setCardFront] = useState("");
    // const [cardBack, setCardBack] = useState("");
    const {url} = useRouteMatch()
  
    // const newCard = { front: cardFront, back: cardBack };
    // const addSubmitHandler = (event) => {
    //   event.preventDefault();
    //   createCard(deck.id, newCard)
    //     .then((response) => deck.cards.push(response))
    //     .then(() => setCardFront(""))
    //     .then(() => setCardBack(""));

        

  return (
    <form onSubmit={(event)=> {
        event.preventDefault()
        submit.action()
    } }>
      <div className="form-group">
        <label htmlFor="name">Front</label>
        <textarea
          className="form-control"
          id="front"
          name="front"
          type="text"
          placeholder="Front side of card"
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
          placeholder="Back side of card"
          rows="2"
          value={card.back}
          onChange={(event) =>
            setCard({ ...card, back: event.target.value })
          }
          required
        ></textarea>
      </div>
      <br />
      <button
        onClick={() => history.push(cancel.url)}
        type="button"
        className="btn btn-secondary mr-2"
      >
        {cancel.name}
      </button>
      <button
        type="submit"
        className="btn btn-primary mr-2"
      >
        {submit.name}
      </button>
    </form>
  );
}

export default CardForm;


{/* <form onSubmit={editSubmitHandler}>
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
      </form> */}