import React, { useState } from "react";
import {
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import Deck from "./Deck";

function CreateDeck() {
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");
  const history = useHistory();
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={url}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <span className="oi oi-home"></span>Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Deck
            </li>
          </ol>
        </nav>
        <h1>Create Deck</h1>
        <form onSubmit={() => history.push("/decks/:deckId")}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              placeholder="Deck Name"
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
              placeholder="Brief description of the deck"
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
            type="submit"
            value="Submit"
          ></input>
        </form>
      </Route>
      <Route path="/decks/:deckId">
        <Deck />
      </Route>
    </Switch>
  );
}

export default CreateDeck;
