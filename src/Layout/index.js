import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "./CreateDeck";

function Layout() {
  const history = useHistory();
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => history.push("/decks/new")}
            >
              <span class="oi oi-plus"></span> Create Deck
            </button>
            {/* <DeckList /> */}
            <br />
            Deck List HERE
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
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
