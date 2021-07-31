import React, { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom"
import { listDecks } from "../utils/api";
import DeckListItem from "./DeckListItem";

function DeckList() {
  const {url} = useRouteMatch()
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
    fetchDecks()

    return () => {
        abortController.abort()
    }
  }, []);

const deckList = decks.map((deck, index) => <DeckListItem key={index} deck={deck} />)

  return (
      <div>
      {deckList}    
      </div>
  )
}

export default DeckList;
