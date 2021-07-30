import React from "react";
import {
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import Deck from "./Deck";

function CreateDeck() {
  const history = useHistory();
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={url}>
        <nav ariaLabel="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">
                <span class="oi oi-home"></span>Home
              </Link>
            </li>
            <li class="breadcrumb-item active" ariaCurrent="page">
              Create Deck
            </li>
          </ol>
        </nav>
        <h1>Create Deck</h1>
        <form onSubmit={() => history.push("/decks/:deckId")}>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              class="form-control"
              id="name"
              name="name"
              type="text"
              placeHolder="Deck Name"
              required
            />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              class="form-control"
              id="description"
              placeHolder="Brief description of the deck"
              rows="4"
              required
            ></textarea>
          </div>
          <br />
          <button
            onClick={() => history.push("/")}
            type="button"
            class="btn btn-secondary mr-2"
          >
            Cancel
          </button>
          <input class="btn btn-primary" type="submit" value="Submit"></input>
        </form>
      </Route>
      <Route path="/decks/:deckId">
        <Deck />
      </Route>
    </Switch>
  );
}

export default CreateDeck;
