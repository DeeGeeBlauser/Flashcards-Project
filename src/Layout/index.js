import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "./CreateDeck";
import DeckList from "./DeckList";
import Deck from "./Deck";
import Study from "./Study";
import EditDeck from "./EditDeck";
import { listDecks } from "../utils/api";

function Layout() {
  const history = useHistory();
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchDecks() {
      try {
        const decks = await listDecks(abortController.signal);
        setDecks(decks);
      } catch (err) {
        console.log(err);
      }
    }
    fetchDecks();

    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => history.push("/decks/new")}
            >
              <span className="oi oi-plus"></span> Create Deck
            </button>
            <DeckList decks={decks} />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck decks={decks}/>
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
