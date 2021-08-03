import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { readDeck } from "../utils/api";
import CardList from "./CardList";
import EditCard from "./EditCard";
import AddCard from "./AddCard";

function Deck() {
  const [deck, setDeck] = useState({});
  const deckId = useParams().deckId;
  const { url } = useRouteMatch();

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

  return deck.id ? (
    <>
      <Switch>
        <Route exact path={url}>
          <div>
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
            <Link to={`${url}/edit`} className="btn btn-secondary mr-2">
              <span className="oi oi-pencil mr-1"></span>Edit
            </Link>
            <Link to={`${url}/study`} className="btn btn-primary mr-2">
              <span className="oi oi-book mr-1"></span>Study
            </Link>
            <Link to={`${url}/cards/new`} className="btn btn-primary mr-2">
              <span className="oi oi-plus mr-1"></span>Add Cards
            </Link>
            <button
              type="button"
              onClick={() => {
                if (
                  window.confirm(
                    "Delete this deck? \n\nYou will not be able to recover it."
                  )
                ) {
                }
              }}
              className="btn btn-danger text-center float-right"
            >
              <span className="oi oi-trash"></span>
            </button>
            <h3 className="mt-4">Cards</h3>
            <CardList cards={deck.cards} />
          </div>
        </Route>
        <Route exact path={`${url}/cards/new`}>
          <AddCard deck={deck} />
        </Route>
        <Route exact path={`${url}/cards/:cardId/edit`}>
          <EditCard deck={deck} />
        </Route>
      </Switch>
    </>
  ) : (null);
}

export default Deck;
