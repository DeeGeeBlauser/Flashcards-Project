import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { listCards, readDeck } from "../utils/api";
import CardList from "./CardList";

function Deck({ decks }) {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
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
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchCards() {
      try {
        const cards = await listCards(deckId, abortController.signal);
        setCards(cards);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCards();

    return () => {
      abortController.abort();
    };
  },[deckId]);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home"></span>Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <h4 className="mb-3">{deck.name}</h4>
      <p>{deck.description}</p>
      <Link to={`/decks/${deck.id}/edit`} className="btn btn-secondary mr-2">
        <span className="oi oi-pencil mr-1"></span>Edit
      </Link>
      <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mr-2">
        <span className="oi oi-book mr-1"></span>Study
      </Link>
      <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary mr-2">
        <span className="oi oi-plus mr-1"></span>Add Cards
      </Link>
      <Link
        to={`/decks/${deck.id}/DELETE`}
        className="btn btn-danger text-center float-right"
      >
        <span className="oi oi-trash"></span>
      </Link>
      <h3>Cards</h3>
      <CardList cards={cards} />
    </>
  );
}

export default Deck;
