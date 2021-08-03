import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { listCards, readDeck } from "../utils/api";
import NotEnoughCards from "./NotEnoughCards";

function Study() {
  const history = useHistory();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [wasCardFlipped, setWasCardFlipped] = useState(false);
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
  }, [deckId]);

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
  }, [deckId]);

  const currentCard = cards[currentCardIndex] || { front: "", back: "" };
  function renderCard(currentCard) {
    return (
      <>
        <div class="mb-4">
          {isCardFlipped ? currentCard.back : currentCard.front}
        </div>
        <button
          type="button"
          class="btn btn-secondary mr-2"
          onClick={() => {
            setIsCardFlipped(!isCardFlipped);
            setWasCardFlipped(true);
          }}
        >
          Flip
        </button>
        {wasCardFlipped ? (
          <button
            type="button"
            class="btn btn-primary mr-2"
            onClick={() => {
              if (currentCardIndex + 1 >= cards.length) {
                if (
                  window.confirm(
                    "Restart cards? \n\nClick 'cancel' to return to the home page"
                  )
                ) {
                  setCurrentCardIndex(0);
                  setIsCardFlipped(false);
                  setWasCardFlipped(false);
                } else {
                  history.push("/");
                }
              } else {
                setCurrentCardIndex(currentCardIndex + 1);
                setIsCardFlipped(false);
                setWasCardFlipped(false);
              }
            }}
          >
            Next
          </button>
        ) : (
          <></>
        )}
      </>
    );
  }

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
            Study
          </li>
        </ol>
      </nav>
      
      {cards.length <= 2 ? (
        <NotEnoughCards deck={deck} cards={cards}/>
      ) : (
          <>
          <h1 className="mb-3">Study: {deck.name}</h1>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              Card {currentCardIndex + 1} of {cards.length}
            </h4>
            <p class="card-text">{renderCard(currentCard)}</p>
          </div>
        </div>
        </>
      )}
    </>
  );
}

export default Study;
