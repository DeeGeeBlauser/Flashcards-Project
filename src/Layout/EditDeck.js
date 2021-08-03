import React, { useEffect, useState } from "react";
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { listCards, readDeck } from "../utils/api";
import { updateDeck } from "../utils/api";

function EditDeck() {
  const [deck, setDeck] = useState({});
//   const [cards, setCards] = useState([]);
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");
  const history = useHistory();
//   const { url } = useRouteMatch();
  const deckId = useParams().deckId;

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchDeck() {
      try {
        const deck = await readDeck(deckId, abortController.signal);
        setDeck(deck);
      } catch (err) {
        console.log(err);
      }
    }
    fetchDeck();

    return () => {
      abortController.abort();
    };
  }, [deckId]);

  

//   useEffect(() => {
//     const abortController = new AbortController();
//     async function fetchCards() {
//       try {
//         const cards = await listCards(deckId, abortController.signal);
//         setCards(cards);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchCards();

//     return () => {
//       abortController.abort();
//     };
//   }, [deckId]);

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
            <span className="oi"></span>{deck.name}
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Edit
        </li>
      </ol>
    </nav>
    <h1 className="mb-3">Edit Deck</h1>
    <form onSubmit={() => history.push("/decks/:deckId")}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            placeholder={deck.name}
            value={deckName}
            onChange={(event) => setDeckName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            placeholder={deck.description}
            rows="4"
            value={deckDescription}
            onChange={(event) => setDeckDescription(event.target.value)}
            required
          ></textarea>
        </div>
        <br />
          <button
            onClick={() => history.push("/")}
            type="button"
            className="btn btn-secondary mr-2"
          >
            Cancel
          </button>
          <input
            className="btn btn-primary"
            onClick={() => history.push("/")}
            type="submit"
            value="Submit"
          ></input>
        </form>
      </>
  )
}

export default EditDeck;
