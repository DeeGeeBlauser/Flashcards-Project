import React from "react";
import DeckListItem from "./DeckListItem";

function DeckList({decks}) {
 const deckList = decks.map((deck, index) => <DeckListItem key={index} deck={deck} />)

  return (
      <div>
      {deckList}    
      </div>
  )
}

export default DeckList;
